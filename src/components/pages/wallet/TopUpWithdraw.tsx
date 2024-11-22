import {
  IconArrowUp,
  IconArrowDown,
  ArrowTopUp,
  ArrowTopWithdraw,
} from "@/components/icons/Icones";

export default function ToUpWithdraw() {
  return (
    <section className="flex rounded-sm">
      <div className="bg-[#6418C3] relative flex px-6 py-8">
        <ArrowTopUp size={110} className="absolute bottom-0 left-10" />
        <div className="flex flex-col items-start justify-center w-2/3">
          <span className="text-xl text-white font-medium">TOP UP</span>
          <span className="text-sm text-[#FFFFFFB2]">
            Lorem ipsum dolor sit amet, consectetur adipis
          </span>
        </div>
        <div className="flex items-center justify-end w-1/3">
          <span className="bg-white p-4 rounded-[2px]">
            <IconArrowUp size={27} color="#6418C3" />
          </span>
        </div>
      </div>
      <div className="bg-[#3A0183] relative flex px-6 py-8">
        <ArrowTopWithdraw size={110} className="absolute top-0 left-10" />
        <div className="flex flex-col items-start justify-center w-2/3">
          <span className="text-xl text-white font-medium">WITHDRAW</span>
          <span className="text-[#FFFFFFB2]">
            Lorem ipsum dolor sit amet, consectetur adipis
          </span>
        </div>
        <div className="flex items-center justify-end w-1/3">
          <span className="bg-white p-4">
            <IconArrowDown size={27} color="#6418C3" />
          </span>
        </div>
      </div>
    </section>
  );
}
