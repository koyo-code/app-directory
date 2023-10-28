"use client";
import Link from "next/link";
import type { Blog } from "@/microcms/microcms";
import React, { ChangeEvent, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { AiOutlineClockCircle } from "react-icons/ai";

dayjs.extend(utc);
dayjs.extend(timezone);

type BlogArray = Array<Blog>;

export default function Items(contents: Blog) {
  const objArrayContents: BlogArray = Object.values(contents);

  const tags: string[] = ["HTML", "CSS", "JS", "PHP", "OTHER"];
  const [name, setName] = useState("");
  const [sports, setSports] = useState(tags);

  const onChangeName = (event: ChangeEvent) => {
    const eventTarget = event.target as HTMLInputElement;
    setName(eventTarget.value);
  };
  const onChangeSport = (event: ChangeEvent) => {
    const eventTarget = event.target as HTMLInputElement;
    eventTarget.checked
      ? setSports([...sports, eventTarget.value])
      : setSports(
          sports.filter((sport) => sport.match(eventTarget.value) === null)
        );
  };

  const reg = new RegExp(name, "i");
  let datas = objArrayContents.filter((data) => data.title.match(reg));
  datas = datas.filter((data) => sports.includes(data.genre[0]));

  return (
    <>
      <div className="gap-7 flex flex-col  md:flex-row-reverse items-center justify-between mt-20 md:mt-40 mb-10 md:mb-20">
        <input
          type="text"
          className="mx-auto md:ml-auto md:mr-0 block w-60 rounded py-2 px-2 md:px-3 text-base font-medium text-box"
          placeholder="Search"
          onChange={onChangeName}
        />
        <div className="flex gap-3 ">
          {tags.map((tag) => (
            <label className="text-xs text-center" key={tag} htmlFor={tag}>
              {tag}
              <input
                className="peer sr-only"
                type="checkbox"
                id={tag}
                value={tag}
                onChange={onChangeSport}
                defaultChecked
              />
              <span
                className="block mt-1 mx-auto w-[4em] cursor-pointer bg-gray-500 rounded-full
                p-[2px] after:block after:h-[2em] after:w-[2em] after:rounded-full
                after:bg-white after:transition peer-checked:bg-blue-500
                peer-checked:after:translate-x-[calc(100%-4px)]"
              ></span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-6 gap-4">
        {datas.map((member, index) => {
          return (
            <Link
              className="text-box h-full block"
              href={`/static/${member.id}`}
              key={index}
            >
              <div className="relative">
                <span
                  className={`inline-block py-2 px-4 text-sm md:text-base absolute top-0 right-0 ${member.genre[0]}`}
                >
                  {member.genre[0]}
                </span>
                <h3 className="font-bold  text-lg md:text-2xl flex justify-center items-center w-full h-auto aspect-[5/3] theme-item">
                  {member.title}
                </h3>
              </div>
              <div className="p-3">
                <p className="mb-2 px-2 text-[--fore-ground] text-xs md:text-sm flex justify-end items-center gap-1">
                  <AiOutlineClockCircle />
                  {dayjs
                    .utc(member.updatedAt)
                    .tz("Asia/Tokyo")
                    .format("YYYY-MM-DD")}
                </p>
                <p className="text-sm exp-line">{member.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
