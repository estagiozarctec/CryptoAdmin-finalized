"use client";
import { Doughnut } from "react-chartjs-2";
import { IconChevronDown } from "@/components/icons/Icones";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChart() {
  const data = {
    datasets: [
      {
        label: "Income",
        data: [50],
        backgroundColor: ["#6418C3"],
        borderWidth: 1,
        circumference: 250,
        rotation: 0,
      },
      {
        label: "Spends",
        data: [30],
        backgroundColor: ["#9859E7"],
        borderWidth: 1,
        circumference: 220,
        rotation: 0,
      },
      {
        label: "Safe",
        data: [20],
        backgroundColor: ["#E1CAFF"],
        borderWidth: 1,
        circumference: 180,
        rotation: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
    cutout: "70%",
  };

  return (
    <section className="bg-white flex flex-col p-6 gap-4 ">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Portfolio Chart</span>
          <span className="font-light text-[#969BA0]">
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
        <div className="flex items-center bg-[#F4F5F9] gap-3 justify-between py-2 px-3 cursor-pointer">
          <div className="flex gap-1">
            <span>Weekly</span>
            <span>(2020)</span>
          </div>
          <IconChevronDown width={10} height={10} color="#6418C3" />
        </div>
      </div>

      <div className="flex  items-center py-4 gap-10">
        <div className="flex w-[250px] h-[250px]">
          <Doughnut data={data} options={options} />
        </div>
        <div className="flex flex-col h-[250px] items-center justify-center py-4 gap-6">
          <div className="flex gap-5">
            <div>
              <div className="bg-[#6418C3] w-6 h-6"></div>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="flex gap-1">
                <span>Icome</span>
                <span>(50%)</span>
              </div>
              <span className="font-semibold">$632,662,662</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="bg-[#9859E7] w-6 h-6"></div>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="flex gap-1">
                <span>Spends</span>
                <span>(30%)</span>
              </div>
              <span className="font-semibold">$632,662,662</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <div className="bg-[#E1CAFF] w-6 h-6"></div>
            </div>
            <div className=" flex flex-col gap-2">
              <div className="flex gap-1">
                <span>Safe</span>
                <span>(20%)</span>
              </div>
              <span className="font-semibold">$632,662,662</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
