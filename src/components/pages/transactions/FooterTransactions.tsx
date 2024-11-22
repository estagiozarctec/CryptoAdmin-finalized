export default function FooterTransactions() {
  return (
    <section className="flex items-center justify-between w-full text-sm font-medium">
      <div>
        <span>Showing 10 of 160 data</span>
      </div>
      <div className="flex border-2 border-[#6418c3] text-[#6418C3] transition-colors">
        {/* Previous Button */}
        <div className="flex border-r-2 border-[#6418c3] hover:bg-[#6418c3] hover:text-white">
          <button className="px-4">&lt;&lt; Previous</button>
        </div>
        {/* 1 ao 4 */}
        <div className="bg-[#6418C31F]">
          <button className="px-4 py-2 hover:bg-[#6418c3] hover:text-[#FDFDFD] ">
            1
          </button>
          <button className="px-4 py-2 hover:bg-[#6418c3] hover:text-[#FDFDFD]">
            2
          </button>
          <button className="px-4 py-2 hover:bg-[#6418c3] hover:text-[#FDFDFD]">
            3
          </button>
          <button className="px-4 py-2 hover:bg-[#6418c3] hover:text-[#FDFDFD]">
            4
          </button>
        </div>
        {/* Next Button */}
        <div className="flex border-l-2 border-[#6418c3] hover:bg-[#6418c3] hover:text-white">
          <button className="px-4">Next &gt;&gt;</button>
        </div>
      </div>
    </section>
  );
}
