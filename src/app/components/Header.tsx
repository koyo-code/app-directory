import Link from "next/link";

export default function header() {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <a href="/">STATIC</a>
          </li>
          <li>
            <a href="/static/">STATIC</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
