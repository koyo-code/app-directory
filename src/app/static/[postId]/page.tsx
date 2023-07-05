import { notFound } from "next/navigation";
import { getDetail, getList } from "../../../microcms/microcms";
import { PageWrapper } from "../../components/Page-Wrapper";
import { AiOutlineRocket, AiOutlineSetting, AiFillFile } from "react-icons/ai";
import Copy from "@/app/components/Copy";

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
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-5 flex gap-2 items-center">
              <AiOutlineRocket className="text-[--item-border]" />
              Functions
            </h2>
            <ul className="mb-10 md:mb-20 border-t border-[#ccc]">
              <>
                {post.functions.map((func, index) => {
                  return (
                    <li className="flex flex-col gap-3 py-5 border-b border-[#ccc]" key={index}>
                      <p className="text-sm md:text-base px-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:rounded-full before:w-2 before:h-2 before:bg-[--fore-ground]">{func.text}</p>
                    </li>
                  );
                })}
              </>
            </ul>
          </>
        )}
        {post.options[0] && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-5 flex gap-2 items-center">
              <AiOutlineSetting className="text-[--item-border]" />
              Options
            </h2>
            <ul className="border-t border-[#ccc] mb-10 md:mb-20">
              <>
                {post.options.map((option, index) => {
                  return (
                    <li className="flex flex-col gap-2 md:gap-3 py-5 border-b border-[#ccc]" key={index}>
                      {/* @ts-expect-error Server Component  */}
                      <Copy option={...option.title} />
                      <div>
                        <span className="text-sm md:text-base font-bold mr-2">Type :</span>
                        {option.types.map((type) => {
                          return (
                            <>
                              <span className="inline-block mr-2 mb-2 bg-[--item-border] text-[--fore-ground] px-2 py-1" key={type.text}>
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
            {post.reference !== null && (
              <>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-5 flex gap-2 items-center">
                  <AiFillFile className="text-[--item-border]" />
                  Reference
                </h2>
                <div className="flex flex-col gap-4">
                  {post.reference.map((ref, i) => {
                    return (
                      <dl className="flex flex-col gap-2" key={i}>
                        <dt className="font-bold text-base">{ref.key}</dt>
                        <dd>
                          <a className="underline break-all" href={ref.value}>
                            {ref.value}
                          </a>
                        </dd>
                      </dl>
                    );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </PageWrapper>
    </>
  );
}
