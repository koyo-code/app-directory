import Link from "next/link";
import Image from "next/image";
import React from "react";
import { getList } from "../../microcms/microcms";

export default async function PostItems() {
  const { contents } = await getList();
  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <ul className="w-full grid md:grid-cols-3 grid-cols-2 gap-3">
      {contents.map((post) => {
        return (
          <li className="rounded overflow-hidden shadow-lg theme-item" key={post.id}>
            <Link href={`/static/${post.id}`}>
              <Image src="/park.jpg" alt="/park.jpg" width={500} height={500} className="w-full" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-base mb-2">{post.title}</h3>
                <p className="text-sm exp-line">{post.content}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
