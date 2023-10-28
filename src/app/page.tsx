import Items from "@/app/common/components/Items";
import { getList } from "@/microcms/microcms";

export default async function Home() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }
  return (
    <div className="w-[90%] mx-auto">
      {/* @ts-expect-error Async Server Component */}
      <Items {...contents} />
    </div>
  );
}
