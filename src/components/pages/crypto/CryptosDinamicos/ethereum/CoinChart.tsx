"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import dayjs from "dayjs";
import {
  IconCalendar,
  IconChevronDown,
  IconChevronTriangleUp,
  IconEth,
} from "@/components/icons/Icones";
ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

export default function CoinChartETH() {
  const generateMonths = (count: number) => {
    const months = [];
    for (let i = 0; i < count; i++) {
      months.push(dayjs().month(i).format("MMMM"));
    }
    return months;
  };
  const labels = generateMonths(12);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset",
        data: [420, 540, 720, 500, 200, 400, 160, 500, 600, 700, 400, 800],
        fill: true,
        borderColor: "#DC3CCC",
        backgroundColor: "rgba(255, 171, 45, 0.2)",
        tension: 0.4,
        pointRadius: [5],
        pointBackgroundColor: "#DC3CCC",
      },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: {
        title: { display: true },
        grid: {
          display: false,
        },
        ticks: {
          beginZero: false,
        },
      },
      y: {
        title: { display: true },
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 200,
          beginZero: false,

          callback: function (value: any) {
            return value + "k";
          },
        },
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            let value = context.raw;
            return `$${value}k`;
          },
          title: function (context: any) {
            const date = new Date(2020, context[0].dataIndex);
            return dayjs(date).format("D MMMM YYYY");
          },
        },
      },
      legend: { display: false },
    },
  };
  return (
    <section className="flex flex-1 flex-col gap-8 w-3/4 bg-white p-6">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold">Coin Chart</h2>
          <span className="text-xs text-[#969BA0]">
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
        <div className="flex gap-6">
          <button className="flex items-center justify-center gap-4 font-medium text-sm bg-[#F4F5F9] px-4">
            <IconCalendar size={18} />
            <span>4 June 2020 - 17 June 2020</span>
          </button>
          <button className="flex items-center justify-center gap-4 font-medium text-sm bg-[#F4F5F9] px-4">
            <span>USD ($ US DOLLAR)</span>
            <IconChevronDown width={14} height={8} color="#6418C3" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start w-2/3">
          <div className="flex flex-col gap-1 pr-16 border-r">
            <span className="text-[#00000099]">Price</span>
            <span className="text-4xl font-semibold">$11,898.15</span>
          </div>
          <div className="flex flex-1 gap-8 pl-16">
            <div className="flex flex-col gap-2 h-full">
              <span className="text-sm text-[#00000099]">24h% change</span>
              <div className="flex items-center gap-2">
                <span className="font-medium text-xl text-[#2BC155]">
                  1.64%
                </span>
                <IconChevronTriangleUp size={16} className="text-[#2BC155]" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#00000099]">Volume (24h)</span>
              <span className="font-semibold text-xl">$47.22B</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-[#00000099]">Market Cap</span>
              <span className="font-semibold text-xl">$219.24B</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 w-1/3">
          <div className="flex flex-col items-end">
            <span className="font-semibold text-2xl">Ethereum</span>
            <span className="font-bold text-sm text-[#00000021]">ETH</span>
          </div>
          <IconEth color="#DC3CCC" size={64} />
        </div>
      </div>
      <div className="flex items-center w-full h-full mt-2">
        <Line data={data} options={options} width={300} />
      </div>
    </section>
  );
}
