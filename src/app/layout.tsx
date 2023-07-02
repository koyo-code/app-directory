import "./globals.css";
import Providers from "./components/Provider";
import Header from "./components/Header";
import { getList } from "../microcms/microcms";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { contents } = await getList();
  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

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
