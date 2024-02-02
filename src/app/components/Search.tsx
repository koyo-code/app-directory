import { ChangeEvent } from "react";
export default function Search({
  onChangeName,
}: {
  onChangeName: (event: ChangeEvent) => void;
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
      </div>
    </>
  );
}
