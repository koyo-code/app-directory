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
        <div className="my-20 md:my-40">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
