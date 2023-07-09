import Link from "next/link";
import ThemeButton from "../components/ThemeButton";
export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 md:p-5 ">
      <div>
        <p className="text-2xl md:text-3xl font-bold">
          <Link href="/">LIBRARY</Link>
        </p>
      </div>
      <ThemeButton />
    </header>
  );
}
