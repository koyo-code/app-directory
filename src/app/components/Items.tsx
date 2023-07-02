"use client";
import Link from "next/link";
import Image from "next/image";
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
              <motion.li variants={images} className="rounded overflow-hidden theme-item" key={index}>
                <Link href={`/static/${member.id}`}>
                  <Image src="/park.jpg" alt="/park.jpg" width={326} height={217} className="w-full" />
                  <div className="px-4 md:px-5 py-3 md:py-4">
                    <p className="text-right text-xs">{new Date(member.updatedAt).toLocaleDateString()}</p>
                    <h3 className="font-bold text-sm md:text-base mb-2">{member.title}</h3>
                    <p className="text-xs md:text-sm exp-line mb-4">{member.content}</p>
                    <div className="flex justify-end">
                      {member.genre.map((gen) => {
                        return (
                          <span key={gen} className="label text-xs md:text-sm  inline-block bg-transparent py-1 px-2 ml-2 rounded">
                            {gen}
                          </span>
                        );
                      })}
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
