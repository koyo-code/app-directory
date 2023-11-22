import Link from "next/link";
import { AiOutlineCaretLeft } from "react-icons/ai";

export default function PageTop() {
  return (
    <Link
      href={`/`}
      className="fixed top-2 left-2 flex items-center justify-center h-auto w-16 aspect-square border-solid border-2 border-[#000]"
    >
      <AiOutlineCaretLeft className="text-2xl text-[#000]" />
    </Link>
  );
}
