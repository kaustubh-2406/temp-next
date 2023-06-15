'use client';

export default function Page() {
	return <h1>{process.env.NEXT_PUBLIC_VERCEL_URL}</h1>;
}
