import Link from 'next/link';
import { Metadata } from 'next';
import { Card, PublicShell, Section } from '@gitroom/frontend/components/public/public-shell';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'News Factory Social',
  description:
    'News Factory Social schedules and publishes News Factory video productions to the social channels our clients own.',
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
    body: 'The finished production goes out to the connected channel at the agreed time — no file to download, no manual upload, nothing for the client to remember.',
  },
];

const PRODUCTS = [
  {
    title: 'Daily news videos',
    body: 'A financial news bulletin produced every day, with the client’s presenter, branding and language.',
  },
  {
    title: 'Market updates',
    body: 'Weekly market and economic-calendar rundowns, built from the same data that drives our widgets.',
  },
  {
    title: 'Social graphics',
    body: 'Vertical cuts, breaking-news cards and top-movers images, sized for each network.',
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

export default function HomePage() {
  return (
    <PublicShell>
      <div className="flex flex-col gap-24">
        <section className="flex flex-col items-start gap-6 pt-6">
          <span className="rounded-full border border-white/10 bg-[#1A1919] px-4 py-[6px] text-[13px] text-white/60">
            News Factory Social
          </span>
          <h1 className="max-w-[900px] text-[46px] font-semibold leading-[1.08] sm:text-[60px]">
            Your daily video, published for you.
          </h1>
          <p className="max-w-[700px] text-[19px] leading-relaxed text-white/60">
            News Factory produces daily financial news videos, market updates and social
            graphics for broker and media clients. This is where that work is scheduled and
            published straight to the channels each client owns.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/auth/login"
              className="rounded-[8px] bg-[#612AD5] px-6 py-[13px] text-[15px] font-semibold transition-colors hover:bg-[#7139E8]"
            >
              Sign in
            </Link>
            <Link
              href="/about"
              className="rounded-[8px] border border-white/15 px-6 py-[13px] text-[15px] font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
            >
              How it works
            </Link>
          </div>
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

        <Section title="What gets published">
          <div className="grid gap-4 md:grid-cols-3">
            {PRODUCTS.map((item) => (
              <Card key={item.title} title={item.title}>
                {item.body}
              </Card>
            ))}
          </div>
        </Section>

        <Section title="What we access on a connected channel">
          <p className="max-w-[760px] text-[16px] leading-relaxed text-white/60">
            When a client connects a YouTube channel, Google asks them to approve the
            permissions below. We request each one because a feature of this service needs it,
            and we use them only to publish and report on the productions we make for that
            client.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {ACCESS.map((item) => (
              <Card key={item.title} title={item.title}>
                {item.body}
              </Card>
            ))}
          </div>
          <p className="max-w-[760px] text-[15px] leading-relaxed text-white/50">
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

        <section className="flex flex-col items-start gap-4 rounded-[16px] border border-white/10 bg-[#1A1919] p-10">
          <h2 className="text-[26px] font-semibold">For the News Factory team</h2>
          <p className="max-w-[700px] text-[16px] leading-relaxed text-white/60">
            Accounts here are created by News Factory for our own production team. Clients
            never need an account — they only connect their channel once, through a link we
            send them.
          </p>
          <Link
            href="/auth/login"
            className="rounded-[8px] bg-[#612AD5] px-6 py-[13px] text-[15px] font-semibold transition-colors hover:bg-[#7139E8]"
          >
            Sign in
          </Link>
        </section>
      </div>
    </PublicShell>
  );
}
