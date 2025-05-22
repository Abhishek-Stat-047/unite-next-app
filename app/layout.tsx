import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { raleway } from "@/config/fonts";
import AppNavbar from "@/components/common/NavBar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          raleway.className
        )}
      >
        <Providers themeProps={{ attribute: "class" }}>
          <div className="relative flex flex-col h-screen">
            <AppNavbar />
            <main className="mx-auto px-4 sm:px-6 lg:px-20 py-8 w-full ">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
