"use client";
import {
  IconChevronDown,
  IconBtc,
  IconArrowDownRight,
  IconArrowUpLeft,
} from "../../icons/Icones";

export default function QuickTrade() {
  const users = [
    { name: "Samuel", handle: "@sam224" },
    { name: "Cindy", handle: "@cindyss" },
    { name: "David", handle: "@davidxc" },
    { name: "MArtha", handle: "@marthaa" },
    { name: "Olivia", handle: "@oliv62" },
    { name: "Bella", handle: "@sbellazz" },
  ];

  return (
    <section className="flex flex-1 flex-col gap-8 bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Quick trade</h2>
          <span className="text-xs text-[#969BA0]">
            Lorem ispsum dolor sit amet, consectetur
          </span>
        </div>
        <button className="flex gap-6 px-6 py-3 items-center bg-gray-100">
          <div>
            <IconChevronDown width={14} height={8} color="#868686" />
          </div>
          <div className="flex gap-1">
            <span>561,511</span>
            <span>Btc</span>
          </div>
          <div>
            <IconBtc size={42} color="#FFAB2D" />
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex border-2 border-[#EFEFEF]">
          <div className="flex items-center justify-center border-r-2 w-1/4 py-4">
            <span className="text-[#888888]">Amount BTC</span>
          </div>
          <div className="w-3/4 px-2 py-4">
            <input
              className="bg-transparent border-none text-black outline-none appearence-none placeholder:text-sm"
              type="number"
              placeholder="0.000000"
            />
            <style>
              {`
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          /* Para Firefox */
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
            </style>
          </div>
        </div>
        <div className="flex border-2 border-[#EFEFEF]">
          <div className="flex items-center justify-center border-r-2 w-1/4 py-4">
            <span className="text-[#888888]">Price BPL</span>
          </div>
          <div className="w-3/4 px-2 py-4">
            <input
              className="bg-transparent border-none text-black outline-none appearence-none placeholder:text-sm"
              type="number"
              placeholder="0.000000"
            />
            <style>
              {`
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          /* Para Firefox */
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
            </style>
          </div>
        </div>
        <div className="flex border-2 border-[#EFEFEF]">
          <div className="flex items-center justify-center border-r-2 w-1/4 py-4">
            <span className="text-[#888888]">Fee (1%)</span>
          </div>
          <div className="w-3/4 px-2 py-4">
            <input
              className="bg-transparent border-none text-black outline-none appearence-none placeholder:text-sm"
              type="number"
              placeholder="0.000000"
            />
            <style>
              {`
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          /* Para Firefox */
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
            </style>
          </div>
        </div>
        <div className="flex border-2 border-[#EFEFEF]">
          <div className="flex items-center justify-center border-r-2 w-1/4 py-4">
            <span className="text-[#888888]">Total BPL</span>
          </div>
          <div className="w-3/4 px-2 py-4">
            <input
              className="bg-transparent border-none text-black outline-none appearence-none placeholder:text-sm"
              type="number"
              placeholder="0.000000"
            />
            <style>
              {`
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          
          /* Para Firefox */
          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
            </style>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-1/3">
          <span className="text-[13px] text-[#0C0C0CB2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </span>
        </div>
        <div className="flex justify-end gap-6 pl-8 w-2/3 text-white text-lg font-semibold">
          <button className="flex items-center justify-center w-1/2 gap-4 px-6 bg-[#2BC155]">
            <span>BUY</span>
            <IconArrowDownRight size={21} color="white" />
          </button>
          <button className="flex items-center justify-center w-1/2 gap-4 px-6 bg-[#FF2E2E]">
            <span>SELL</span>
            <IconArrowUpLeft size={21} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
}
