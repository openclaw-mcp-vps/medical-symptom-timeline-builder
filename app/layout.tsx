import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Symptom Timeline Builder — Track Symptoms for Doctor Visits",
  description: "Build visual timelines of your symptoms to share with doctors. Track severity, patterns, and history for chronic illness management."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ddceb2bf-b7e2-4f26-9070-a19a2fc22b35"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
