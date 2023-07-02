import Items from "./components/Items";
import { getList } from "../microcms/microcms";

export default async function Home() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }
  return (
    /* @ts-expect-error Server Component */
    <Items {...contents} />
  );
}
