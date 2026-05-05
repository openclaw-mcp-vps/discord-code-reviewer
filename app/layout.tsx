import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Code Reviewer — AI Code Review Bot for Dev Servers",
  description: "Automated code review and feedback in Discord channels with syntax highlighting. Perfect for coding bootcamps and dev communities."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1a2652ac-84e2-492a-9527-6021c57cb561"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
