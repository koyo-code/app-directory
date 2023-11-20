import { notFound } from "next/navigation";
import { getDetail, getList } from "@/microcms/microcms";
import PageTop from "@/app/common/components/PageTop";
import { AiOutlineRocket, AiOutlineSetting } from "react-icons/ai";

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });
  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);

  if (!post) {
    notFound();
  }
  return (
    <div className="w-[90%] mx-auto my-20 md:my-40">
      <PageTop />
      <h1 className="text-center font-bold text-3xl md:text-5xl mb-10 md:mb-14">
        {post.title}
        <span
          className={`${post.genre[0]} text-xl inline-block px-3 ml-5 align-middle`}
        >
          {post.genre[0]}
        </span>
      </h1>
      <iframe
        className="block w-full h-auto aspect-[4/3] md:aspect-[5/2] mb-10 md:mb-20"
        src={post.codepen}
        loading="lazy"
      ></iframe>
      <div className="max-w-screen-lg mx-auto">
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
                    <li
                      className="flex flex-col gap-3 py-5 border-b border-[#ccc]"
                      key={index}
                    >
                      <p className="text-sm md:text-base px-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:rounded-full before:w-2 before:h-2 before:bg-[--fore-ground]">
                        {func.text}
                      </p>
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
                    <li
                      className="flex flex-col gap-2 md:gap-3 py-5 border-b border-[#ccc]"
                      key={index}
                    >
                      <h3 className="text-xl md:text-2xl font-bold w-fit flex gap-2 items-center">
                        {option.title}
                      </h3>
                      <div>
                        <span className="text-sm md:text-base font-bold mr-2">
                          Type :
                        </span>
                        {option.types.map((type) => {
                          return (
                            <>
                              <span
                                className="inline-block mr-2 mb-2 bg-[--item-border] text-[--fore-ground] px-2 py-1"
                                key={type.text}
                              >
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
      </div>
    </div>
  );
}
