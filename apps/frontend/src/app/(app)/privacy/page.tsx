import Link from 'next/link';
import { Metadata } from 'next';

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
    use: 'Read your channel details and video list so we can show you which channel is connected and confirm a publish succeeded.',
  },
  {
    scope: 'yt-analytics.readonly',
    use: 'Read the performance figures of your channel (views, watch time, subscribers) to show them in the dashboard.',
  },
  {
    scope: 'userinfo.profile / userinfo.email',
    use: 'Identify the Google account that authorised the connection, so the right channel is attached to the right client.',
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full px-6 py-16 text-white">
      <div className="mx-auto flex max-w-[760px] flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-[36px] font-semibold">Privacy Policy</h1>
          <p className="text-white/60">News Factory Social — last updated 8 September 2026</p>
        </header>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-semibold">Who we are</h2>
          <p className="text-white/80">
            News Factory produces video news content for broker and media clients. News
            Factory Social (social.newsfactory.tv) is the internal tool our production team
            uses to schedule and publish that content to the social channels our clients own.
            It is not a consumer product and is not open to public sign-up.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-semibold">What we access, and why</h2>
          <p className="text-white/80">
            When you connect a YouTube channel, Google asks you to grant the permissions
            below. We request each one because a feature of this service needs it:
          </p>
          <ul className="flex flex-col gap-3">
            {SCOPES.map((item) => (
              <li key={item.scope} className="flex flex-col gap-1">
                <span className="font-semibold">{item.scope}</span>
                <span className="text-white/80">{item.use}</span>
              </li>
            ))}
          </ul>
          <p className="text-white/80">
            We do not read your private videos, your comments, your messages or any content we
            did not publish ourselves, beyond what is needed for the uses listed above.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-semibold">What we store</h2>
          <p className="text-white/80">
            We store the access and refresh tokens Google issues when you authorise the
            connection, the channel name, channel id and channel avatar, and a record of the
            posts we published or scheduled. Tokens are held in our own database on our
            hosting provider and are used only to act on the channel you connected.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-semibold">What we do not do</h2>
          <p className="text-white/80">
            We do not sell your data. We do not share it with third parties for advertising,
            profiling or resale. We do not use Google user data to train generative AI models.
            Data obtained through Google APIs is used only to provide the publishing and
            reporting features described here.
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
          <h2 className="text-[22px] font-semibold">Retention and deletion</h2>
          <p className="text-white/80">
            We keep the tokens and channel record for as long as the channel is connected. When
            a channel is disconnected, or when our engagement with the client ends, the tokens
            and the channel record are deleted from our database.
          </p>
          <p className="text-white/80">
            You can revoke our access yourself at any time at{' '}
            <a
              className="underline"
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noreferrer"
            >
              myaccount.google.com/permissions
            </a>
            . Revoking access stops all publishing to that channel immediately. To have the
            stored record deleted as well, email us and we will remove it.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[22px] font-semibold">Other networks</h2>
          <p className="text-white/80">
            The same principles apply to every other social network a client connects here: we
            request the narrowest permissions the publishing feature needs, store only the
            tokens and channel identity, and use them only to publish and report on the content
            we produce for that client.
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
            <Link className="underline" href="/about">
              About this service
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
