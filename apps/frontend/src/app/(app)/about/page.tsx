import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News Factory Social',
  description:
    'News Factory Social publishes and schedules News Factory video productions to the social channels our clients own.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full px-6 py-16 text-white">
      <div className="mx-auto flex max-w-[760px] flex-col gap-8">
        <header className="flex flex-col gap-3">
          <h1 className="text-[36px] font-semibold">News Factory Social</h1>
          <p className="text-[18px] text-white/70">
            The publishing desk for News Factory video productions.
          </p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-semibold">What this service does</h2>
          <p className="text-white/80">
            News Factory produces daily financial news videos, market updates and social
            graphics for broker and media clients. News Factory Social is the tool our
            production team uses to schedule and publish those finished productions to the
            social channels each client owns, so a client does not have to download a file
            and upload it by hand every day.
          </p>
          <p className="text-white/80">
            A client connects their own channel once, through a link we send them. From that
            point we can publish the videos we produce for them, on the schedule they agreed
            to. A client can disconnect at any time.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-semibold">YouTube</h2>
          <p className="text-white/80">
            When a client connects a YouTube channel, we ask Google for permission to upload
            videos to that channel, to manage the videos and playlists we created there, to
            read the channel&apos;s own details, and to read that channel&apos;s analytics so
            the client can see how a published video performed. We use this access only to
            publish and report on the productions we make for that client.
          </p>
          <p className="text-white/80">
            Our use of information received from Google APIs follows the{' '}
            <a
              className="underline"
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-semibold">Contact</h2>
          <p className="text-white/80">
            News Factory —{' '}
            <a className="underline" href="mailto:pa@newsfactory.tv">
              pa@newsfactory.tv
            </a>
          </p>
          <p className="text-white/80">
            <Link className="underline" href="/privacy">
              Privacy policy
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
