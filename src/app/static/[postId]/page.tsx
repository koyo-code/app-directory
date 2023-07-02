import { notFound } from "next/navigation";
import { getDetail, getList } from "../../../microcms/microcms";
import { PageWrapper } from "../../components/Page-Wrapper";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

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
