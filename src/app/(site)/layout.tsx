import "~/styles/globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next JS + Sanity template",
};

interface Language {
  lang: string;
}

export function generateStaticParams() {
  // List of languages needed for internationalization
  return [{ lang: "en" }, { lang: "fi" }, { lang: "no" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Language;
}) {
  return (
    <html lang={params.lang}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
