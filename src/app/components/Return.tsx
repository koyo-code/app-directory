import Link from "next/link";

export default function Return() {
  return (
    <>
      <Link href={`/`} className="flex justify-center items-center fixed top-0 left-0 w-14 md:w-20 h-14 md:h-20 theme-item ">
        ◀
      </Link>
    </>
  );
}
