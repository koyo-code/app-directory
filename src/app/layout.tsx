import "@/app/common/styles/globals.css";
import Providers from "@/app/common/components/Providers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <title>Source Code Management</title>
        <meta
          name="description"
          content="ソースコード管理をする個人用アプリケーション"
        />
        <meta name="robots" content="noindex" />
      </head>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
