import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// The OAuth state the backend mints lives in Redis for an hour, so the shareable
// link has to re-mint on every visit instead of pointing at a fixed OAuth url.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ provider: string }> }
) {
  const { provider } = await params;
  const apiKey = process.env.POSTIZ_CONNECT_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Connect link is not configured' }, { status: 500 });
  }

  const response = await fetch(
    `${process.env.BACKEND_INTERNAL_URL}/public/v1/social/${provider}`,
    { headers: { Authorization: apiKey }, cache: 'no-store' }
  );

  if (!response.ok) {
    return NextResponse.json({ error: 'Could not start the connection' }, { status: 502 });
  }

  const { url } = (await response.json()) as { url?: string };

  if (!url) {
    return NextResponse.json({ error: 'Could not start the connection' }, { status: 502 });
  }

  return NextResponse.redirect(url);
}
