"use client";
import { AiOutlineApi } from "react-icons/ai";

export default function Copy(option: { option: string }) {
  function copyTextToClipboard(option: string) {
    navigator.clipboard.writeText(option).then(
      function () {
        alert(`「${option}」をコピーしました`);
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      }
    );
  }
  return (
    <h3 className="text-xl md:text-2xl font-bold hover:text-[--item-border] w-fit flex gap-2 items-center cursor-pointer" onClick={() => copyTextToClipboard(option.option)}>
      <AiOutlineApi />
      {option.option}
    </h3>
  );
}
