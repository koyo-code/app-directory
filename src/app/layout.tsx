import "@/app/common/styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>LIBRARY</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
