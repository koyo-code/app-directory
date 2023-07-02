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
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </PageWrapper>
  );
}
