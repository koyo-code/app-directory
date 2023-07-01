import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>aga</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
