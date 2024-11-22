import {
  IconChevronTriangleUp,
  IconChevronTriangleDown,
} from "@/components/icons/Icones";
export default function HeaderMarket() {
  return (
    <section className="flex w-full bg-white px-6 py-4 border-b-2 border-[#E9ECFF]">
      <div className="flex w-3/12">
        <div className="flex items-center gap-3 w-1/4">
          <span className="font-medium">Rank</span>
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
        <div className="flex items-center gap-3 w-3/4">
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
          <span className="px-10"></span>
        </div>
      </div>
      <div className="flex items-center gap-3 w-2/12">
        <span className="font-medium">Last Price</span>
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
      <div className="flex items-center gap-3 w-2/12">
        <span className="font-medium">Change (24h)</span>
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
      <div className="flex items-center gap-3 w-2/12">
        <span className="font-medium">Volume (24h)</span>
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
      <div className="flex items-center gap-3 w-3/12">
        <span className="font-medium">Graph</span>
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
