import Link from "next/link";
import Image from "next/image";
import { getList } from "../libs/microcms";

export default async function Home() {
  const { contents } = await getList();
  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <ul className="w-full grid grid-cols-3 gap-3">
      {contents.map((post) => {
        return (
          <li className="rounded overflow-hidden shadow-lg" key={post.id}>
            <Link href={`/static/${post.id}`}>
              <Image src="/park.jpg" alt="/park.jpg" width={500} height={500} className="w-full" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-700 text-base">{post.content}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
