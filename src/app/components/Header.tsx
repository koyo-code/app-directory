import Link from "next/link";

const header = () => {
  return (
    <header>
      <nav className="p-2">
        <ul className="flex items-center space-x-2">
          <li>
            <Link href="/">LIBRARY</Link>
          </li>
          <li>
            <Link href="/test/">Test</Link>
          </li>{" "}
          <li>
            <Link href="/static/">Static</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
