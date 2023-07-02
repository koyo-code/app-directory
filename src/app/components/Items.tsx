"use client";
import Link from "next/link";
import type { Blog } from "../../microcms/microcms";
import React, { useState } from "react";
import { PageWrapper } from ".//Page-Wrapper";
import { motion } from "framer-motion";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

type BlogArray = Array<Blog>;

export default function Items(contents: Blog) {
  const objArrayContents: BlogArray = Object.values(contents);

  console.log(objArrayContents);

  const [inputValue, setInputValue] = useState("");
  const [memberList, setMemberList] = useState<BlogArray>(objArrayContents);

  const search = (value: string) => {
    if (value !== "") {
      const filteredList = objArrayContents.filter((member: Blog) =>
        Object.values(member).some((item: string | Array<string>) => {
          if (typeof item === "string") {
            return item.toUpperCase().indexOf(value.trim().toUpperCase()) !== -1;
          }
          return false;
        })
      );
      setMemberList(filteredList);
      return;
    }
    setMemberList(objArrayContents);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };

  return (
    <>
      <input className="ml-auto block w-48 md:w-60 rounded mb-10 md:mb-20 py-1 md:py-2 px-2 md:px-3 text-base font-medium text-box" placeholder="Search" type="text" value={inputValue} onChange={handleChange} />
      <PageWrapper>
        <motion.ul variants={variants} initial="hidden" animate="show" className="w-full grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
          {memberList.map((member, index) => {
            return (
              <motion.li variants={images} className="overflow-hidden" key={index}>
                <Link className="item h-full block" href={`/static/${member.id}`}>
                  <div className="relative">
                    <span className={`inline-block py-1 px-3 text-sm md:text-base absolute top-0 right-0 text-white ${member.genre[0]}`}>{member.genre[0]}</span>
                    <h3 className="font-bold text-lg md:text-xl flex justify-center items-center w-full h-auto aspect-[16/9] theme-item">{member.title}</h3>
                  </div>
                  <div className="p-3 md:p-4 text-box">
                    <p className="text-right text-xs mb-2">{dayjs.utc(member.updatedAt).tz("Asia/Tokyo").format("YYYY-MM-DD")}</p>
                    <p className="text-xs md:text-sm exp-line">{member.content}</p>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </PageWrapper>
    </>
  );
}
