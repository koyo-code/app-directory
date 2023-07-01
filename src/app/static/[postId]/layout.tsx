import "../../globals.css";
import Header from "../../components/Header";
export default function StaticLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>ddd</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
