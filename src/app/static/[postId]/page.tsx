import { notFound } from "next/navigation";
import { getDetail, getList } from "../../../microcms/microcms";
import { PageWrapper } from "../../components/Page-Wrapper";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({ params: { postId } }: { params: { postId: string } }) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }
  return (
    <PageWrapper>
      <h2 className="font-bold text-3xl md:text-4xl mb-3 md:mb-5">{post.title}</h2>
      <p className="mb-5 text-sm md:text-base">{post.content}</p>
      <iframe className="block w-full h-auto aspect-[3/4] md:aspect-video mb-10 md:mb-20" src={post.codepen} loading="lazy"></iframe>
    </PageWrapper>
  );
}
