import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Watering Schedule",
    default: "Watering Schedule",
  },
  description: "a watering schedule for aliens living among us.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
