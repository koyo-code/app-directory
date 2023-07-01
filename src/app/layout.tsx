import "./globals.css";
import Providers from "./components/Provider";
import Header from "./components/Header";
// import Search from "./components/Search";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>aaa</title>
      </head>
      <body className="">
        <Providers>
          <Header />
          <main className="w-[90%] max-w-screen-lg mx-auto mt-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
