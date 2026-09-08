import { Metadata } from 'next';
import { ReactNode } from 'react';
import { PublicShell, Section } from '@gitroom/frontend/components/public/public-shell';

export const metadata: Metadata = {
  title: 'Privacy Policy — News Factory Social',
  description:
    'How News Factory Social accesses, uses, stores and shares data from connected social accounts, including Google user data.',
};

const SCOPES = [
  {
    scope: 'youtube.upload',
    use: 'Upload the videos we produce for you to your channel.',
  },
  {
    scope: 'youtube / youtube.force-ssl',
    use: 'Manage the videos and playlists we created on your channel — set titles, descriptions, thumbnails and privacy, and remove a post we published.',
  },
  {
    scope: 'youtube.readonly',
    use: 'Read your channel details and video list, so we can show you which channel is connected and confirm a publish succeeded.',
  },
  {
    scope: 'yt-analytics.readonly',
    use: 'Read the performance figures of your channel — views, watch time, subscribers — to show them in the dashboard.',
  },
  {
    scope: 'userinfo.profile / userinfo.email',
    use: 'Identify the Google account that authorised the connection, so the right channel is attached to the right client.',
  },
];

const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className="max-w-[760px] text-[16px] leading-relaxed text-white/60">{children}</p>
);

export default function PrivacyPage() {
  return (
    <PublicShell>
      <div className="flex flex-col gap-16">
        <header className="flex flex-col gap-3">
          <h1 className="text-[42px] font-semibold leading-[1.1]">Privacy Policy</h1>
          <p className="text-[15px] text-white/40">
            News Factory Social · last updated 8 September 2026
          </p>
        </header>

        <Section title="Who we are">
          <Paragraph>
            News Factory produces video news content for broker and media clients. News
            Factory Social (social.newsfactory.tv) is the internal tool our production team
            uses to schedule and publish that content to the social channels our clients own.
            It is not a consumer product and is not open to public sign-up.
          </Paragraph>
        </Section>

        <Section title="What we access, and why">
          <Paragraph>
            When you connect a YouTube channel, Google asks you to grant the permissions
            below. We request each one because a feature of this service needs it:
          </Paragraph>
          <div className="flex flex-col overflow-hidden rounded-[12px] border border-white/10">
            {SCOPES.map((item, index) => (
              <div
                key={item.scope}
                className={`flex flex-col gap-2 bg-[#1A1919] p-6 sm:flex-row sm:gap-8 ${
                  index ? 'border-t border-white/10' : ''
                }`}
              >
                <span className="shrink-0 font-mono text-[14px] text-white sm:w-[260px]">
                  {item.scope}
                </span>
                <span className="text-[15px] leading-relaxed text-white/60">{item.use}</span>
              </div>
            ))}
          </div>
          <Paragraph>
            We do not read your private videos, your comments, your messages or any content we
            did not publish ourselves, beyond what is needed for the uses listed above.
          </Paragraph>
        </Section>

        <Section title="What we store">
          <Paragraph>
            We store the access and refresh tokens Google issues when you authorise the
            connection, the channel name, channel id and channel avatar, and a record of the
            posts we published or scheduled. Tokens are held in our own database on our
            hosting provider and are used only to act on the channel you connected.
          </Paragraph>
        </Section>

        <Section title="What we do not do">
          <Paragraph>
            We do not sell your data. We do not share it with third parties for advertising,
            profiling or resale. We do not use Google user data to train generative AI models.
            Data obtained through Google APIs is used only to provide the publishing and
            reporting features described here.
          </Paragraph>
          <Paragraph>
            Our use of information received from Google APIs follows the{' '}
            <a
              className="text-white/80 underline underline-offset-4 hover:text-white"
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noreferrer"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </Paragraph>
        </Section>

        <Section title="Retention and deletion">
          <Paragraph>
            We keep the tokens and channel record for as long as the channel is connected. When
            a channel is disconnected, or when our engagement with the client ends, the tokens
            and the channel record are deleted from our database.
          </Paragraph>
          <Paragraph>
            You can revoke our access yourself at any time at{' '}
            <a
              className="text-white/80 underline underline-offset-4 hover:text-white"
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noreferrer"
            >
              myaccount.google.com/permissions
            </a>
            . Revoking access stops all publishing to that channel immediately. To have the
            stored record deleted as well, email us and we will remove it.
          </Paragraph>
        </Section>

        <Section title="Other networks">
          <Paragraph>
            The same principles apply to every other social network a client connects here: we
            request the narrowest permissions the publishing feature needs, store only the
            tokens and channel identity, and use them only to publish and report on the content
            we produce for that client.
          </Paragraph>
        </Section>

        <Section title="Contact">
          <Paragraph>
            News Factory —{' '}
            <a
              className="text-white/80 underline underline-offset-4 hover:text-white"
              href="mailto:pa@newsfactory.tv"
            >
              pa@newsfactory.tv
            </a>
          </Paragraph>
        </Section>
      </div>
    </PublicShell>
  );
}
