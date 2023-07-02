import Link from "next/link";
import ThemeButton from "../components/ThemeButton";
export default function Header() {
  return (
    <header className="flex justify-between p-5">
      <div>
        <h1 className="text-3xl font-bold">
          <Link href="/">LIBRARY</Link>
        </h1>
      </div>
      <ThemeButton />
    </header>
  );
}
