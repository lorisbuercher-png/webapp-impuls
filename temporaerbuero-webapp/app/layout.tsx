import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Temporärbüro WebApp', description: 'Moderne Recruiting-Plattform für Schweizer Temporärbüros' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="de"><body>{children}</body></html>; }
