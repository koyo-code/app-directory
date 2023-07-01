// "use client";
// import { getList } from "../../microcms/microcms";
// import * as React from "react";
// import escapeStringRegexp from "escape-string-regexp";

// export default async function Search() {
//   const { contents } = await getList();
//   // ユーザーの入力キーワードをState化する
//   const [searchKeyword, updateSearchKeyword] = React.useState("");

//   // 入力イベントに反応してStateを更新する
//   const onInput = (event: React.FormEvent<HTMLInputElement>) => {
//     // 入力キーワードをstateに格納する
//     updateSearchKeyword(event.currentTarget.value);
//   };

//   let stringBox: string[] = [];
//   contents.forEach((content) => {
//     stringBox.push(content.title);
//   });
//   const filteredList = stringBox.filter((item) => {
//     // ユーザー入力を安全に正規表現にする（このときすべて小文字化で正規化する）
//     const escapedText = escapeStringRegexp(searchKeyword.toLowerCase());
//     // 小文字で比較して部分一致するものだけを残す
//     return new RegExp(escapedText).test(item.toLowerCase());
//   });

//   // あとはただ表示するだけ
//   return (
//     <div className="Search">
//       <div>
//         <input id="search-keyword" type="text" onInput={onInput} placeholder={"input search keyword"} />
//       </div>
//       <ul className="list">
//         {filteredList.map((item) => {
//           return <li key={item}>{item}</li>;
//         })}
//       </ul>
//     </div>
//   );
// }
export {};
