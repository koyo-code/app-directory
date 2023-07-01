import Link from "next/link";

export default function header() {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <Link href="/">HOME</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
