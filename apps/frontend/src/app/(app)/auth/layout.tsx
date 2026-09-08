export const dynamic = 'force-dynamic';
import { ReactNode } from 'react';
import Link from 'next/link';
import loadDynamic from 'next/dynamic';
const ReturnUrlComponent = loadDynamic(() => import('./return.url.component'));

const HIGHLIGHTS = [
  'Daily financial news videos, published on schedule',
  'Clients connect their own channel — no passwords shared',
  'One place for every brand, language and network',
] as const;

export default async function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-[#0E0E0E] text-white">
      <ReturnUrlComponent />

      <aside className="relative hidden w-[46%] flex-col justify-between overflow-hidden border-r border-white/10 p-14 lg:flex">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#612AD5]/25 blur-[120px]" />
        <div className="absolute -bottom-40 -right-24 h-[420px] w-[420px] rounded-full bg-[#2AA5D5]/15 blur-[130px]" />

        <Link href="/" className="relative flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nf-logo-full-white.png" alt="News Factory" className="h-[40px] w-auto" />
        </Link>

        <div className="relative flex flex-col gap-8">
          <h1 className="max-w-[440px] text-[38px] font-semibold leading-[1.15]">
            The publishing desk for News Factory video productions.
          </h1>
          <ul className="flex flex-col gap-4">
            {HIGHLIGHTS.map((line) => (
              <li key={line} className="flex items-start gap-3 text-[15px] text-white/60">
                <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#8B5CF6]" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex gap-6 text-[13px] text-white/40">
          <Link className="transition-colors hover:text-white/70" href="/privacy">
            Privacy
          </Link>
          <Link className="transition-colors hover:text-white/70" href="/terms">
            Terms
          </Link>
        </div>
      </aside>

      <main className="flex flex-1 items-center justify-center px-6 py-14">
        <div className="flex w-full max-w-[430px] flex-col gap-8">
          <Link href="/" className="flex items-center lg:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/nf-logo-full-white.png" alt="News Factory" className="h-[34px] w-auto" />
          </Link>
          <div className="flex flex-col">{children}</div>
        </div>
      </main>
    </div>
  );
}
