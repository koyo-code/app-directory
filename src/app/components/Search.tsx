import { ChangeEvent } from "react";
export default function Search({
  tags,
  onChangeName,
  onChangeSport,
}: {
  tags: string[];
  onChangeName: (event: ChangeEvent) => void;
  onChangeSport: (event: ChangeEvent) => void;
}) {
  return (
    <>
      <div className="gap-7 flex flex-col  md:flex-row-reverse items-center justify-between mb-12 md:mb-16 lg:mb-20 xl:mb-24">
        <input
          type="text"
          className="mx-auto md:ml-auto md:mr-0 block w-60 rounded py-2 px-2 md:px-3 text-base font-medium text-box"
          placeholder="Search"
          onChange={onChangeName}
        />
        <div className="flex gap-3">
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
    </>
  );
}
