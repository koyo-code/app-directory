"use client";
import type { Blog } from "@/microcms/microcms";
import React, { ChangeEvent, useState } from "react";

import Search from "@/app/components/Search";
import ItemList from "@/app/components/ItemList";

export default function TopPage(contents: Blog) {
  const objArrayContents: Array<Blog> = Object.values(contents);

  const [name, setName] = useState("");

  const onChangeName = (event: ChangeEvent) => {
    const eventTarget = event.target as HTMLInputElement;
    setName(eventTarget.value);
  };

  const reg = new RegExp(name, "i");
  let datas = objArrayContents.filter((data) => data.title.match(reg));

  return (
    <div className="py-20 md:py-24 lg:py-32 xl:py-40">
      <Search onChangeName={onChangeName} />
      <ItemList datas={datas} />
    </div>
  );
}
