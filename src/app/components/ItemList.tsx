import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import Time from "@/app/components/Time";

import type { Blog } from "@/microcms/microcms";

export default function ItemList({ datas }: { datas: Array<Blog> }) {
  return (
    <>
      <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 md:gap-6 gap-4">
        {datas.map((data, index) => {
          return (
            <Link
              className="text-box h-full block"
              href={`/details/${data.id}`}
              key={index}
            >
              <div className="relative">
                <span
                  className={`inline-block py-1 md:py-2 px-3 md:px-4 text-sm md:text-base absolute top-0 right-0 ${data.genre[0]}`}
                >
                  {data.genre[0]}
                </span>
                <h3 className="font-bold text-base md:text-lg lg:text-xl xl:text-2xl flex justify-center items-center w-full h-auto aspect-[5/3] theme-item">
                  {data.title}
                </h3>
              </div>
              <div className="p-3 lg:p-4">
                <p className="mb-2 px-2 text-[--fore-ground] text-xs md:text-sm flex justify-end items-center gap-1 text-[#999]">
                  <AiOutlineClockCircle />
                  <Time update={data.updatedAt} />
                </p>
                <p className="text-xs lg:text-sm exp-line">
                  {data.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
