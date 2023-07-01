import Link from "next/link";
import { getList } from "../libs/microcms";

export const revalidate = 0;

export default async function Home() {
  const { contents } = await getList();
  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <ul>
      {contents.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
