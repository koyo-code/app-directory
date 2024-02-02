import Link from "next/link";
import { AiOutlineSwapLeft } from "react-icons/ai";

export default function PageTop() {
  return (
    <Link
      href={`/`}
      className="absolute top-2 left-2 flex items-center justify-center h-auto w-10 md:w-12 lg:w-14 xl:w-16 aspect-square bg-[--item-border]"
    >
      <AiOutlineSwapLeft className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl theme-item" />
    </Link>
  );
}
