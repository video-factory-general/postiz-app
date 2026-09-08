import Link from 'next/link';
import { ReactNode } from 'react';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Overview' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
] as const;

export const PublicShell = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen w-full bg-[#0E0E0E] text-white">
    <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0E0E0E]/90 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1120px] items-center justify-between px-6">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/nf-logo-full-white.png"
            alt="News Factory"
            className="h-[34px] w-auto"
          />
        </Link>
        <div className="flex items-center gap-7">
          <nav className="hidden items-center gap-7 text-[14px] text-white/60 sm:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                className="transition-colors hover:text-white"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/auth/login"
            className="rounded-[8px] bg-[#612AD5] px-5 py-[10px] text-[14px] font-semibold transition-colors hover:bg-[#7139E8]"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>

    <main className="mx-auto max-w-[1120px] px-6 py-16">{children}</main>

    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-6 py-10 text-[14px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} News Factory</span>
        <div className="flex flex-wrap items-center gap-6">
          <a className="transition-colors hover:text-white" href="mailto:pa@newsfactory.tv">
            pa@newsfactory.tv
          </a>
          <Link className="transition-colors hover:text-white" href="/privacy">
            Privacy policy
          </Link>
          <Link className="transition-colors hover:text-white" href="/terms">
            Terms of service
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export const Card = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="flex flex-col gap-2 rounded-[12px] border border-white/10 bg-[#1A1919] p-6">
    <h3 className="text-[16px] font-semibold">{title}</h3>
    <p className="text-[15px] leading-relaxed text-white/60">{children}</p>
  </div>
);

export const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="flex flex-col gap-4">
    <h2 className="text-[24px] font-semibold">{title}</h2>
    {children}
  </section>
);

export const Prose = ({ children }: { children: ReactNode }) => (
  <p className="max-w-[760px] text-[16px] leading-relaxed text-white/60">{children}</p>
);
