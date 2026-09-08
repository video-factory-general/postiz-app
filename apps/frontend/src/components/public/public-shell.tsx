import Link from 'next/link';
import { ReactNode } from 'react';

export const PublicShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen w-full bg-[#0E0E0E] text-white">
    <header className="border-b border-white/10">
      <div className="mx-auto flex h-[72px] max-w-[1040px] items-center justify-between px-6">
        <Link href="/about" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/nf-logo-full-white.png"
            alt="News Factory"
            className="h-[30px] w-auto"
          />
        </Link>
        <nav className="flex items-center gap-6 text-[14px] text-white/60">
          <Link className="transition-colors hover:text-white" href="/about">
            Overview
          </Link>
          <Link className="transition-colors hover:text-white" href="/privacy">
            Privacy
          </Link>
        </nav>
      </div>
    </header>

    <main className="mx-auto max-w-[1040px] px-6 py-16">{children}</main>

    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1040px] flex-col gap-3 px-6 py-10 text-[14px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} News Factory</span>
        <div className="flex items-center gap-6">
          <a className="transition-colors hover:text-white" href="mailto:pa@newsfactory.tv">
            pa@newsfactory.tv
          </a>
          <Link className="transition-colors hover:text-white" href="/privacy">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export const Card = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div className="flex flex-col gap-2 rounded-[12px] border border-white/10 bg-[#1A1919] p-6">
    <h3 className="text-[16px] font-semibold">{title}</h3>
    <p className="text-[15px] leading-relaxed text-white/60">{children}</p>
  </div>
);

export const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="flex flex-col gap-4">
    <h2 className="text-[24px] font-semibold">{title}</h2>
    {children}
  </section>
);
