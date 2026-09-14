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
    dataType: 'The videos and video files you authorise us to upload',
    use: 'Upload the videos we produce for you to your channel.',
  },
  {
    scope: 'youtube / youtube.force-ssl',
    dataType: 'Video and playlist metadata (titles, descriptions, thumbnails, privacy status) on content we published',
    use: 'Manage the videos and playlists we created on your channel — set titles, descriptions, thumbnails and privacy, and remove a post we published.',
  },
  {
    scope: 'youtube.readonly',
    dataType: 'Your channel name, channel ID, channel avatar, and the list of videos on your channel',
    use: 'Read your channel details and video list, so we can show you which channel is connected and confirm a publish succeeded.',
  },
  {
    scope: 'yt-analytics.readonly',
    dataType: 'Channel performance metrics — views, watch time, subscriber counts',
    use: 'Read the performance figures of your channel — views, watch time, subscribers — to show them in the dashboard.',
  },
  {
    scope: 'userinfo.profile / userinfo.email',
    dataType: 'Your Google account name and email address',
    use: 'Identify the Google account that authorised the connection, so the right channel is attached to the right client.',
  },
];

const USES = [
  'Publish and schedule the videos we produce directly to your connected channel(s).',
  'Update titles, descriptions, thumbnails and privacy settings on the videos and playlists we created, and remove a post we published if you ask us to.',
  'Show you which channel is connected in our dashboard, and confirm to our production team that a scheduled publish succeeded or failed.',
  'Display channel performance metrics (views, watch time, subscribers) back to you in our reporting dashboard.',
  'Match the Google account that authorised a connection to the correct client channel, so content is never published to the wrong account.',
];

const PROTECTIONS = [
  'All traffic to and from this service, including the OAuth exchange with Google, is encrypted in transit with TLS/HTTPS. We never transmit tokens or account data over an unencrypted connection.',
  'Google access and refresh tokens are stored in our production database, which sits on a private, access-controlled network and is not directly reachable from the public internet.',
  'Only authorised News Factory engineers can reach the database or the underlying infrastructure, and access is limited to what is needed to operate and support the service.',
  'Tokens and account identifiers are never written to application logs, error trackers, or any analytics tool.',
  'Access to a connected channel can be revoked instantly and independently by you (see "Retention and deletion" below) or by us, without needing the other party.',
];

const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className="max-w-[760px] text-[16px] leading-relaxed text-white/60">{children}</p>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="flex max-w-[760px] flex-col gap-2 text-[16px] leading-relaxed text-white/60">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-white/40" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default function PrivacyPage() {
  return (
    <PublicShell>
      <div className="flex flex-col gap-16">
        <header className="flex flex-col gap-3">
          <h1 className="text-[42px] font-semibold leading-[1.1]">Privacy Policy</h1>
          <p className="text-[15px] text-white/40">
            News Factory Social · last updated 14 September 2026
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

        <Section title="What Google user data we access">
          <Paragraph>
            When you connect a YouTube channel, Google asks you to grant the permissions
            below. We request each one because a specific feature of this service needs it,
            and we access nothing beyond this list:
          </Paragraph>
          <div className="flex flex-col overflow-hidden rounded-[12px] border border-white/10">
            {SCOPES.map((item, index) => (
              <div
                key={item.scope}
                className={`flex flex-col gap-3 bg-[#1A1919] p-6 sm:gap-2 ${
                  index ? 'border-t border-white/10' : ''
                }`}
              >
                <span className="shrink-0 font-mono text-[13px] text-white/80">
                  {item.scope}
                </span>
                <span className="text-[15px] font-medium leading-relaxed text-white">
                  {item.dataType}
                </span>
                <span className="text-[15px] leading-relaxed text-white/60">{item.use}</span>
              </div>
            ))}
          </div>
          <Paragraph>
            We do not read your private videos, your comments, your messages, your subscriber
            list, or any content we did not publish ourselves, and we do not access any Google
            data outside of YouTube (no Gmail, no Drive, no Calendar, no Contacts) — beyond
            what is needed for the uses listed above.
          </Paragraph>
        </Section>

        <Section title="How we use your Google user data">
          <Paragraph>
            We use the Google user data described above only for the following purposes, all
            in direct support of the publishing service you asked us to provide:
          </Paragraph>
          <List items={USES} />
          <Paragraph>
            We do not use Google user data for advertising, for building user profiles across
            services, or for any purpose unrelated to publishing and reporting on the content
            we produce for you.
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

        <Section title="Data sharing, transfer and disclosure">
          <Paragraph>
            We do not sell your data, and we do not transfer or disclose your Google user data
            to any third party for advertising, profiling, resale, or any purpose other than
            the ones described in this policy. We do not use Google user data to train
            generative AI models, and Google user data is never sent to any AI or language
            model we use — the AI features of this service only ever process our own
            editorial text (headlines we write), never your account data.
          </Paragraph>
          <Paragraph>
            The only parties who ever handle your Google user data are the infrastructure
            providers that host this service on our behalf — currently Railway (application
            hosting and database) — strictly as data processors bound to keep it confidential
            and to use it only to run the service for us. We do not have any other
            subprocessor, and we do not share your data with advertisers, data brokers,
            analytics networks, or any other News Factory client.
          </Paragraph>
          <Paragraph>
            If we are ever required to disclose account data by law (for example, a valid
            court order), we will disclose only what is legally compelled and, where legally
            permitted, will attempt to notify you first.
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

        <Section title="How we protect your data">
          <Paragraph>
            We treat Google account tokens and channel data as sensitive information and
            protect them accordingly:
          </Paragraph>
          <List items={PROTECTIONS} />
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
