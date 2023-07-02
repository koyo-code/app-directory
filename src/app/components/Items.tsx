import { getList } from "../../microcms/microcms";
import Link from "next/link";
import Image from "next/image";

export default async function Items() {
  const { contents } = await getList();
  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }
  return (
    <ul className="w-full grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
      {contents.map((post) => {
        return (
          <li className="rounded overflow-hidden theme-item" key={post.id}>
            <Link href={`/static/${post.id}`}>
              <Image src="/park.jpg" alt="/park.jpg" width={326} height={217} className="w-full" />
              <div className="px-4 md:px-5 py-3 md:py-4 mb-2">
                <p className="text-right text-xs">{new Date(post.updatedAt).toLocaleDateString()}</p>
                <h3 className="font-bold text-sm md:text-base mb-2">{post.title}</h3>
                <p className="text-xs md:text-sm exp-line mb-4">{post.content}</p>
                <div className="flex justify-end">
                  {post.genre.map((gen) => {
                    return (
                      <span key={gen} className="label inline-block bg-transparent font-semibold py-1 px-2 ml-2 rounded">
                        {gen}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
