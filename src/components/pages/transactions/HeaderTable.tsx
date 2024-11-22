import {
  IconChevronTriangleUp,
  IconChevronTriangleDown,
} from "@/components/icons/Icones";
export default function HeaderTable() {
  return (
    <section className="flex w-full bg-white px-6 py-4 border-b-2 border-[#E9ECFF]">
      <div className="flex items-center w-1/12">
        <input type="checkbox" className="h-5 w-10 border-black" />
      </div>
      <div className="flex items-center justify-start gap-3 w-2/12">
        <span className="font-medium">Transaction ID</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              size={10}
              className="text-[#D3D6E4] group-hover:text-black"
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              size={10}
              className="text-[#D3D6E4] group-hover:text-black"
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 w-2/12">
        <span className="font-medium">Date</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
        <span className="px-10"></span>
      </div>
      <div className="flex items-center justify-start gap-3 w-1/12">
        <span className="font-medium">From</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 w-1/12">
        <span className="font-medium">To</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 w-1/12">
        <span className="font-medium">Coin</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 w-1/12">
        <span className="font-medium">Amount</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start gap-3 w-2/12">
        <span className="font-medium">Note</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 w-1/12">
        <span className="font-medium">Status</span>
        <div className="flex flex-col">
          <button className="group">
            <IconChevronTriangleUp
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
          <button className="group">
            <IconChevronTriangleDown
              className="text-[#D3D6E4] group-hover:text-black"
              size={10}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
