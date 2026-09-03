'use client';

import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useFetch } from '@gitroom/helpers/utils/custom.fetch';
import { Button } from '@gitroom/react/form/button';
import { deleteDialog } from '@gitroom/react/helpers/delete.dialog';
import { useToaster } from '@gitroom/react/toaster/toaster';

interface Channel {
  id: string;
  name: string;
  picture: string;
  providerIdentifier: string;
  disabled: boolean;
  customer?: { id: string; name: string } | null;
}

interface Video {
  videoId: string;
  title: string;
  publishedAt: string;
  thumbnail: string | null;
}

const NO_CUSTOMER = 'Unassigned';

export const VideosComponent: FC = () => {
  const fetch = useFetch();
  const toaster = useToaster();
  const [channels, setChannels] = useState<Channel[]>([]);
  const [selected, setSelected] = useState<Channel | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const callTool = useCallback(
    async (id: string, name: string, data?: Record<string, string>) => {
      const response = await fetch('/integrations/function', {
        method: 'POST',
        body: JSON.stringify({ id, name, data }),
      });
      if (!response.ok) throw new Error(`${name} failed`);
      return response.json();
    },
    [fetch]
  );

  useEffect(() => {
    (async () => {
      const { integrations } = await (await fetch('/integrations/list')).json();
      const youtube = (integrations as Channel[]).filter(
        (channel) => channel.providerIdentifier === 'youtube' && !channel.disabled
      );
      setChannels(youtube);
      setSelected(youtube[0] || null);
    })();
  }, []);

  useEffect(() => {
    if (!selected) return;
    setLoading(true);
    setError(null);
    callTool(selected.id, 'channelVideos')
      .then((data) => setVideos(Array.isArray(data) ? data : []))
      .catch(() => setError('Could not read this channel — try reconnecting it.'))
      .finally(() => setLoading(false));
  }, [selected, callTool]);

  // Postiz already groups channels by customer everywhere else; reusing it keeps one client's
  // channels together here without inventing a second grouping concept.
  const groups = useMemo(() => {
    const byCustomer = new Map<string, Channel[]>();
    for (const channel of channels) {
      const key = channel.customer?.name || NO_CUSTOMER;
      byCustomer.set(key, [...(byCustomer.get(key) || []), channel]);
    }
    return [...byCustomer.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [channels]);

  const remove = async (video: Video) => {
    if (!selected) return;
    if (
      !(await deleteDialog(
        `Delete "${video.title}" from ${selected.name}? YouTube has no recycle bin — the views, the comments and every link to it go with it.`,
        'Delete forever'
      ))
    ) {
      return;
    }
    try {
      await callTool(selected.id, 'deleteVideo', { videoId: video.videoId });
      setVideos((current) => current.filter((v) => v.videoId !== video.videoId));
      toaster.show('Video deleted', 'success');
    } catch {
      toaster.show('Could not delete the video', 'warning');
    }
  };

  if (!channels.length) {
    return (
      <div className="flex flex-col gap-[16px] p-[24px]">
        <h1 className="text-[24px]">Videos</h1>
        <p className="text-[14px] text-customColor18">
          No YouTube channel is connected yet.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[16px] p-[24px]">
      <h1 className="text-[24px]">Videos</h1>

      <div className="flex gap-[24px]">
        <div className="flex w-[260px] shrink-0 flex-col gap-[16px]">
          {groups.map(([customer, list]) => (
            <div key={customer} className="flex flex-col gap-[8px]">
              <div className="text-[12px] uppercase tracking-wider text-customColor18">
                {customer}
              </div>
              {list.map((channel) => (
                <button
                  key={channel.id}
                  type="button"
                  onClick={() => setSelected(channel)}
                  className={`flex items-center gap-[8px] rounded-[8px] p-[8px] text-left ${
                    selected?.id === channel.id ? 'bg-customColor8' : 'hover:bg-customColor8/50'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={channel.picture} alt="" className="h-[28px] w-[28px] rounded-full" />
                  <span className="truncate text-[14px]">{channel.name}</span>
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
          {loading && <p className="text-[14px] text-customColor18">Loading…</p>}
          {error && <p className="text-[14px] text-red-400">{error}</p>}
          {!loading && !error && !videos.length && (
            <p className="text-[14px] text-customColor18">Nothing published yet.</p>
          )}

          {videos.map((video) => (
            <div
              key={video.videoId}
              className="flex min-w-0 items-center gap-[12px] rounded-[8px] bg-customColor8 p-[8px]"
            >
              {video.thumbnail && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={video.thumbnail} alt="" className="h-[45px] w-[80px] rounded object-cover" />
              )}
              <div className="min-w-0 flex-1">
                <div className="truncate text-[14px]">{video.title}</div>
                <div className="text-[12px] text-customColor18">
                  {video.publishedAt?.slice(0, 10)}
                </div>
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-[12px] underline"
              >
                Open
              </a>
              <a
                href={`https://studio.youtube.com/video/${video.videoId}/edit`}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 text-[12px] underline"
              >
                Edit
              </a>
              <Button type="button" onClick={() => remove(video)} className="!bg-red-600">
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
