"use client";
import Link from "next/link";
import type { Blog } from "../../microcms/microcms";
import React, { useState } from "react";
import { PageWrapper } from ".//Page-Wrapper";
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
      <input className="ml-auto block rounded mb-10 py-1 md:py-2 px-2 md:px-3 text-base font-medium theme-item" placeholder="Search" type="text" value={inputValue} onChange={handleChange} />
      <PageWrapper>
        <motion.ul variants={variants} initial="hidden" animate="show" className="w-full grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
          {memberList.map((member, index) => {
            return (
              <motion.li variants={images} className="overflow-hidden theme-item rounded-xl" key={index}>
                <Link className="h-full block" href={`/static/${member.id}`}>
                  <div className="">
                    <h3 className="label font-bold flex justify-center items-center text-4xl md:text-5xl w-full h-32 md:h-44 bg-transparent">{member.genre[0]}</h3>
                    <div className="p-3 md:p-4">
                      <p className="text-right text-xs">{new Date(member.updatedAt).toLocaleDateString()}</p>
                      <h3 className="font-bold text-sm md:text-lg mb-2">{member.title}</h3>
                      <p className="text-xs md:text-sm exp-line">{member.content}</p>
                    </div>
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
