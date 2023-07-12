export const metadata = {
  title: "Sanity studio",
  description: "Sanity Studio access panel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
