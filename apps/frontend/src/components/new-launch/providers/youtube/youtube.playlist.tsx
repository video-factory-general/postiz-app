'use client';

import { FC, useCallback, useEffect, useState } from 'react';
import { useCustomProviderFunction } from '@gitroom/frontend/components/launches/helpers/use.custom.provider.function';
import { useSettings } from '@gitroom/frontend/components/launches/helpers/use.values';
import { Select } from '@gitroom/react/form/select';
import { Input } from '@gitroom/react/form/input';
import { Button } from '@gitroom/react/form/button';

interface Playlist {
  value: string;
  label: string;
}

/**
 * Lives in the post editor rather than only in the API payload, so a scheduled post's playlist
 * can still be changed — or set for the first time — after it was created.
 */
export const YoutubePlaylist: FC<{
  name: string;
  label: string;
  onChange: (event: { target: { value: string; name: string } }) => void;
}> = (props) => {
  const { name, label, onChange } = props;
  const customFunc = useCustomProviderFunction();
  const { getValues } = useSettings();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [value, setValue] = useState<string>(getValues()[name] || '');
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState('');
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const data = await customFunc.get('playlists').catch(() => []);
    setPlaylists(Array.isArray(data) ? data : []);
  }, [customFunc]);

  useEffect(() => {
    load();
  }, []);

  const select = (next: string) => {
    setValue(next);
    onChange({ target: { value: next, name } });
  };

  const create = async () => {
    if (!title.trim()) return;
    setBusy(true);
    try {
      const created = await customFunc.get('createPlaylist', { title: title.trim() });
      if (created?.value) {
        setPlaylists((current) => [created, ...current]);
        select(created.value);
        setTitle('');
        setCreating(false);
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex flex-col gap-[8px]">
      <Select label={label} name={name} value={value} onChange={(e) => select(e.target.value)}>
        <option value="">Channel only - no playlist</option>
        {playlists.map((playlist) => (
          <option key={playlist.value} value={playlist.value}>
            {playlist.label}
          </option>
        ))}
      </Select>

      {creating ? (
        <div className="flex items-end gap-[8px]">
          <div className="flex-1">
            <Input
              label="New playlist"
              name="newPlaylistTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <Button type="button" loading={busy} onClick={create} className="mb-[10px]">
            Create
          </Button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setCreating(true)}
          className="self-start text-[12px] text-customColor21 underline"
        >
          Create a new playlist
        </button>
      )}
    </div>
  );
};
