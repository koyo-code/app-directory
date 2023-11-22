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
  const { codepen, title, genre, functions, options, id } = await getDetail(
    postId
  );

  if (!id) {
    notFound();
  }
  return (
    <div className="w-[90%] mx-auto my-20 md:my-40">
      <PageTop />
      <h1 className="text-center font-bold text-3xl md:text-5xl mb-10 md:mb-14">
        {title}
        <span
          className={`${genre[0]} text-xl inline-block px-3 ml-5 align-middle`}
        >
          {genre[0]}
        </span>
      </h1>
      <iframe
        className="block w-full h-auto aspect-[4/3] md:aspect-[5/2] mb-10 md:mb-20"
        src={codepen}
        loading="lazy"
      ></iframe>
      <div className="max-w-screen-lg mx-auto">
        {functions[0] && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-5 flex gap-2 items-center">
              <AiOutlineRocket className="text-[--item-border] rotate-45" />
              機能
            </h2>
            <ul className="mb-10 md:mb-20 border-t border-[#ccc]">
              <>
                {functions.map((func, index) => {
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
        {options[0] && (
          <>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-5 flex gap-2 items-center">
              <AiOutlineSetting className="text-[--item-border]  rotate-45" />
              設定
            </h2>
            <ul className="border-t border-[#ccc] mb-10 md:mb-20">
              <>
                {options.map((option, index) => {
                  return (
                    <li
                      className="flex flex-col gap-2 md:gap-3 py-5 border-b border-[#ccc]"
                      key={index}
                    >
                      <div className="flex gap-4 items-end">
                        <h3 className="text-xl md:text-2xl font-bold w-fit flex gap-2 items-center">
                          {option.title}
                        </h3>
                        <p className="text-sm md:text-md font-bold w-fit flex gap-2 items-center text-gray-500">
                          Default : {option.default}
                        </p>
                      </div>
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
