import Link from 'next/link';
import { Metadata } from 'next';
import { Card, PublicShell, Section } from '@gitroom/frontend/components/public/public-shell';

export const metadata: Metadata = {
  title: 'News Factory Social',
  description:
    'News Factory Social publishes and schedules News Factory video productions to the social channels our clients own.',
};

const STEPS = [
  {
    step: '01',
    title: 'The client connects their channel',
    body: 'We send a link. The channel owner signs in with their own account and approves the connection. No password is ever shared with us, and they can disconnect whenever they want.',
  },
  {
    step: '02',
    title: 'We produce the content',
    body: 'Our studio renders that day’s financial news video, market update or social graphic for the brand, in the languages the client publishes in.',
  },
  {
    step: '03',
    title: 'It publishes on schedule',
    body: 'The finished video goes out to the connected channel at the agreed time — no file to download, no manual upload, nothing for the client to remember.',
  },
];

const ACCESS = [
  {
    title: 'Publish videos',
    body: 'Upload the finished production to the channel the client connected.',
  },
  {
    title: 'Manage what we published',
    body: 'Set and correct the title, description, thumbnail and privacy status, file it into a playlist, and remove a post if the client asks us to retract it.',
  },
  {
    title: 'Read the channel',
    body: 'The channel name and avatar, so the client can see which channel is attached, and the video list, so we can confirm a scheduled publish succeeded.',
  },
  {
    title: 'Read performance',
    body: 'Views, watch time and subscriber change for the videos we published, shown back to the client in the dashboard.',
  },
];

export default function AboutPage() {
  return (
    <PublicShell>
      <div className="flex flex-col gap-20">
        <section className="flex flex-col gap-5">
          <span className="text-[13px] uppercase tracking-[0.18em] text-white/40">
            News Factory Social
          </span>
          <h1 className="max-w-[820px] text-[44px] font-semibold leading-[1.1] sm:text-[52px]">
            The publishing desk for News Factory video productions.
          </h1>
          <p className="max-w-[680px] text-[18px] leading-relaxed text-white/60">
            News Factory produces daily financial news videos, market updates and social
            graphics for broker and media clients. This is the tool our production team uses
            to schedule and publish that work to the channels each client owns.
          </p>
        </section>

        <Section title="How it works">
          <div className="grid gap-4 md:grid-cols-3">
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="flex flex-col gap-3 rounded-[12px] border border-white/10 bg-[#1A1919] p-6"
              >
                <span className="text-[13px] font-semibold text-[#8B5CF6]">{item.step}</span>
                <h3 className="text-[17px] font-semibold">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-white/60">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="What we access on a connected YouTube channel">
          <p className="max-w-[720px] text-[16px] leading-relaxed text-white/60">
            When a client connects a channel, Google asks them to approve the permissions
            below. We request each one because a feature of this service needs it, and we use
            them only to publish and report on the productions we make for that client.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {ACCESS.map((item) => (
              <Card key={item.title} title={item.title}>
                {item.body}
              </Card>
            ))}
          </div>
          <p className="max-w-[720px] text-[15px] leading-relaxed text-white/50">
            Our use of information received from Google APIs follows the{' '}
            <a
              className="text-white/80 underline underline-offset-4 hover:text-white"
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements. The full detail is in our{' '}
            <Link
              className="text-white/80 underline underline-offset-4 hover:text-white"
              href="/privacy"
            >
              privacy policy
            </Link>
            .
          </p>
        </Section>

        <Section title="Who this is for">
          <p className="max-w-[720px] text-[16px] leading-relaxed text-white/60">
            News Factory Social is an internal production tool. It is not a consumer product
            and is not open to public sign-up — accounts are created by News Factory for our
            own team. Clients never need an account here; they only connect their channel
            once, through a link we send them.
          </p>
          <p className="text-[16px] text-white/60">
            Questions about a connection:{' '}
            <a
              className="text-white/80 underline underline-offset-4 hover:text-white"
              href="mailto:pa@newsfactory.tv"
            >
              pa@newsfactory.tv
            </a>
          </p>
        </Section>
      </div>
    </PublicShell>
  );
}
