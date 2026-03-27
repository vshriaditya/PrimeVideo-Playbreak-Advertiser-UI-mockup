import type { Metadata } from "next";
import { CampaignProvider } from "@/components/campaign-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prime Video Playbreak Console",
  description: "Advertiser-side campaign builder demo for Prime Video Playbreak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CampaignProvider>{children}</CampaignProvider>
      </body>
    </html>
  );
}
