import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>aaa</title>
      </head>
      <body>
        <Header />
        <main className="w-[90%] max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
