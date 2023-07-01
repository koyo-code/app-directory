import "../globals.css";
import Header from "../components/Header";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>aaa</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
