import {
  IconSearch,
  IconDownload,
  IconCalendar,
  IconChevronDown,
} from "@/components/icons/Icones";

export default function Actions() {
  return (
    <section className="w-full flex justify-between h-16">
      <div className="flex items-center gap-4 bg-[#F1F1F1] w-[31.5%] px-6 py-2">
        <IconSearch></IconSearch>
        <input
          className="bg-transparent outline-none border-none"
          type="text"
          placeholder="Search here"
        />
      </div>
      <div className="flex gap-2">
        <button className="flex items-center justify-center gap-2 border border-[#F4F5F9] bg-[#FFFFFF] text-[#6418C3] text-sm font-semibold px-4">
          <span className="text-[#6418c3] font-bold">USD</span>
          <IconChevronDown color="#D3D6E4" width={12} height={8} />
        </button>
        <button className="flex items-center justify-center border border-[#F4F5F9] gap-4 bg-white text-[#3E4954] text-sm px-4">
          <IconCalendar size={23} />
          <div className="flex flex-col items-start">
            <span className="font-semibold">Filter Periode</span>
            <span>4 June 2020 - 4 July 2020</span>
          </div>
          <IconChevronDown color="#D3D6E4" width={12} height={8} />
        </button>
      </div>
    </section>
  );
}
