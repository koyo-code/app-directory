import { notFound } from "next/navigation";
import { getDetail, getList } from "../../../microcms/microcms";
import { PageWrapper } from "../../components/Page-Wrapper";
import parse from "html-react-parser";

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
    <>
      <PageWrapper>
        <h1 className="font-bold text-3xl md:text-4xl mb-3 md:mb-8">
          {post.title}
          <span className={`${post.genre[0]} text-xl inline-block px-3 ml-5 align-middle`}> {post.genre[0]}</span>
        </h1>
        <iframe className="block w-full h-auto aspect-[3/4] md:aspect-video mb-10 md:mb-20" src={post.codepen} loading="lazy"></iframe>
        {post.functions[0] && (
          <>
            <h2 className="text-3xl font-bold mb-5">Functions</h2>
            <ul className="mb-20 border-t border-[#ccc]">
              <>
                {post.functions.map((func, index) => {
                  return (
                    <li className="flex flex-col gap-3 py-5 border-b border-[#ccc]" key={index}>
                      <p className="text-base px-6 relative before:content-[''] before:absolute before:left-0 before:top-[6px] before:rounded-full before:w-3 before:h-3 before:bg-[--fore-ground]">{func.text}</p>
                    </li>
                  );
                })}
              </>
            </ul>
          </>
        )}
        {post.options[0] && (
          <>
            <h2 className="text-3xl font-bold mb-5">Options</h2>
            <ul className="border-t border-[#ccc]">
              <>
                {post.options.map((option, index) => {
                  return (
                    <li className="flex flex-col gap-3 py-5 border-b border-[#ccc]" key={index}>
                      <h3 className="text-2xl font-bold">{option.title}</h3>
                      <div>
                        <span className="font-bold mr-2">Type :</span>
                        {option.types.map((type) => {
                          return (
                            <>
                              <span className="inline-block mr-2 mb-2 text-box px-2 py-1 " key={type.text}>
                                {type.text}
                              </span>
                            </>
                          );
                        })}
                      </div>
                      <p className="text-sm">{option.description}</p>
                    </li>
                  );
                })}
              </>
            </ul>
          </>
        )}
      </PageWrapper>
    </>
  );
}
