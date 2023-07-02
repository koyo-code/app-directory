import "./globals.css";
import Providers from "./components/Provider";
import Header from "./components/Header";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <title>LIBRARY</title>
      </head>
      <body className="">
        <Providers>
          <Header />
          <main className="w-[90%] max-w-screen-lg mx-auto mt-5 md:mt-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
