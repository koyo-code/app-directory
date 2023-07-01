import Link from "next/link";
import ThemeButton from "../components/ThemeButton";

export default function Header() {
  const navs = ["static", "about"];
  return (
    <header className="flex justify-between p-5">
      <div>
        <h1 className="text-3xl font-bold">
          <Link href="/">LIBRARY</Link>
        </h1>
      </div>
      <ThemeButton />

      {/* <nav>
        <ul className="flex justify-between align-middle gap-4">
          {navs.map((nav) => {
            return (
              <li key={nav}>
                <Link className="text-lg" href={`/${nav}/`}>
                  {nav}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav> */}
    </header>
  );
}
