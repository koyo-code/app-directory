"use client";
import type { Blog } from "@/microcms/microcms";
import React, { ChangeEvent, useState } from "react";

import Search from "@/app/components/Search";
import ItemList from "@/app/components/ItemList";

export default function TopPage(contents: Blog) {
  const objArrayContents: Array<Blog> = Object.values(contents);

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
    <div className="py-20 md:py-24 lg:py-32 xl:py-40">
      <Search
        onChangeSport={onChangeSport}
        onChangeName={onChangeName}
        tags={tags}
      />
      <ItemList datas={datas} />
    </div>
  );
}
