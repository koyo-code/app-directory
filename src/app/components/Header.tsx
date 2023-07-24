import Link from "next/link";
import ThemeButton from "../components/ThemeButton";
export default function Header() {
  return (
    <header className="flex items-center justify-end p-4 md:p-5 ">
      <ThemeButton />
    </header>
  );
}
