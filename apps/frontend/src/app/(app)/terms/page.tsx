import Link from 'next/link';
import { Metadata } from 'next';
import { Prose, PublicShell, Section } from '@gitroom/frontend/components/public/public-shell';

export const metadata: Metadata = {
  title: 'Terms of Service — News Factory Social',
  description:
    'The terms under which News Factory Social is provided and under which a client connects a social channel to it.',
};

export default function TermsPage() {
  return (
    <PublicShell>
      <div className="flex flex-col gap-16">
        <header className="flex flex-col gap-3">
          <h1 className="text-[42px] font-semibold leading-[1.1]">Terms of Service</h1>
          <p className="text-[15px] text-white/40">
            News Factory Social · last updated 8 September 2026
          </p>
        </header>

        <Section title="The service">
          <Prose>
            News Factory Social (social.newsfactory.tv) is operated by News Factory. It is the
            production tool our team uses to schedule and publish the video and image
            productions we make for our clients to the social channels those clients own. It
            is not a consumer product, it is not open to public sign-up, and accounts are
            created by News Factory for our own team.
          </Prose>
        </Section>

        <Section title="Connecting a channel">
          <Prose>
            A client connects a channel by opening a link we send them and authorising the
            connection with their own account on that platform. By connecting a channel, the
            person doing so confirms they are authorised to act for that channel and permits
            News Factory to publish and manage the productions we create for them on it.
          </Prose>
          <Prose>
            We publish only content we produced for that client, on the schedule agreed with
            them. We do not post on a client’s behalf outside that scope.
          </Prose>
        </Section>

        <Section title="Disconnecting">
          <Prose>
            A client may disconnect a channel at any time, either by telling us or by revoking
            our access directly with the platform — for Google, at{' '}
            <a
              className="text-white/80 underline underline-offset-4 hover:text-white"
              href="https://myaccount.google.com/permissions"
              target="_blank"
              rel="noreferrer"
            >
              myaccount.google.com/permissions
            </a>
            . Publishing to that channel stops immediately. Content already published remains
            on the channel and is under the client’s control.
          </Prose>
        </Section>

        <Section title="Acceptable use">
          <Prose>
            Accounts on this service are for authorised News Factory staff. Credentials must
            not be shared, and the service must not be used to publish content the client has
            not commissioned, to access a channel without the owner’s permission, or in breach
            of the terms of any connected platform.
          </Prose>
        </Section>

        <Section title="Third-party platforms">
          <Prose>
            Publishing depends on the platforms our clients connect — YouTube, Instagram and
            others. Those platforms set their own rules, quotas and availability, and may
            change or withdraw access at any time. We are not responsible for a platform
            rejecting, delaying or removing a post, or for changes a platform makes to its
            API.
          </Prose>
        </Section>

        <Section title="Availability">
          <Prose>
            We aim to keep the service running continuously but do not guarantee uninterrupted
            availability. Maintenance, provider outages and platform failures can interrupt
            scheduled publishing. Where a scheduled publish fails, the affected client is
            informed and the production is republished or reissued.
          </Prose>
        </Section>

        <Section title="Data">
          <Prose>
            How we handle data from connected accounts — what we access, what we store, how
            long we keep it and how it is deleted — is set out in our{' '}
            <Link
              className="text-white/80 underline underline-offset-4 hover:text-white"
              href="/privacy"
            >
              privacy policy
            </Link>
            , which forms part of these terms.
          </Prose>
        </Section>

        <Section title="Changes">
          <Prose>
            We may update these terms as the service changes. The date at the top of this page
            shows when it was last revised, and material changes are communicated to the
            clients affected.
          </Prose>
        </Section>

        <Section title="Contact">
          <Prose>
            News Factory —{' '}
            <a
              className="text-white/80 underline underline-offset-4 hover:text-white"
              href="mailto:pa@newsfactory.tv"
            >
              pa@newsfactory.tv
            </a>
          </Prose>
        </Section>
      </div>
    </PublicShell>
  );
}
