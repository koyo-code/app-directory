import { notFound } from "next/navigation";
import { getDetail, getList } from "@/microcms/microcms";
import PageTop from "@/app/common/components/PageTop";
import ThemeButton from "@/app/common/components/ThemeButton";
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
    <>
      <div className="bg-[--item-border] h-40 md:h-60 lg:h-72 xl:h-80 relative">
        <PageTop />
        <div className="absolute top-2 right-2 ">
          <ThemeButton />
        </div>
        <h1 className="w-full text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl  text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {title}
          <span
            className={`${genre[0]} text-xs md:text-sm lg:text-base xl:text-xl inline-block px-2 lg:px-3 ml-3 lg:ml-5 align-middle`}
          >
            {genre[0]}
          </span>
        </h1>
      </div>
      <div className="p-5 md:p-10 bg-[--sub-ground]">
        <iframe
          className="block w-full xl:w-[80%] mx-auto h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
          src={codepen}
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-[90%] mx-auto my-10 md:my-20 relative">
        <div className="detail-wrap">
          {functions[0] && (
            <div>
              <h2 className="detail-title">
                <AiOutlineRocket className="text-[--item-border] rotate-45" />
                説明
              </h2>
              <ul className="detail-list">
                <>
                  {functions.map((func, index) => {
                    return (
                      <li className="detail-item" key={index}>
                        <p className="detail-text px-4 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:rounded-full before:w-2 before:h-2 before:bg-[--fore-ground]">
                          {func.text}
                        </p>
                      </li>
                    );
                  })}
                </>
              </ul>
            </div>
          )}
          {options[0] && (
            <div>
              <h2 className="detail-title">
                <AiOutlineSetting className="text-[--item-border] rotate-45" />
                設定
              </h2>
              <ul className="detail-list">
                <div>
                  {options.map((option, index) => {
                    return (
                      <li className="detail-item" key={index}>
                        <div className="flex gap-4 items-end">
                          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
                            {option.title}
                          </h3>
                          <p className="text-xs md:text-sm lg:text-base xl:text-lg font-bold w-fit flex gap-2 items-center text-gray-400">
                            Default : {option.default}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs md:text-sm  xl:text-base font-bold mr-2">
                            Type :
                          </span>
                          {option.types.map((type) => {
                            return (
                              <>
                                <span
                                  className="inline-block text-xs md:text-sm lg:text-base xl:text-lg mr-2 mb-2 bg-[--item-border] text-white px-2 py-1"
                                  key={type.text}
                                >
                                  {type.text}
                                </span>
                              </>
                            );
                          })}
                        </div>
                        <p className="detail-text">{option.description}</p>
                      </li>
                    );
                  })}
                </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
