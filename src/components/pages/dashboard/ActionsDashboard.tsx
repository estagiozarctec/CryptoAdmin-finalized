import { IconSearch } from "../../icons/Icones";

export default function Actions() {
  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center gap-4 bg-[#F1F1F1] w-[31.5%] px-6 py-2">
        <IconSearch></IconSearch>
        <input
          className="bg-transparent outline-none border-none"
          type="text"
          placeholder="Search here"
        />
      </div>
      <button className="bg-[#6418C3] text-white text-sm px-4 py-4 shadow-md">
        + Add New Crypto
      </button>
    </div>
  );
}
