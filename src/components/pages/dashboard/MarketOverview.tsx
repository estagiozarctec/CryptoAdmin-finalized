"use client";

import {
  IconAll,
  IconBtc,
  IconChevronDown,
  IconEth,
  IconLtc,
  IconXpp,
} from "../../icons/Icones";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  plugins,
} from "chart.js";
import dayjs from "dayjs";
ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

export default function MarketOverview() {
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
        data: [500, 300, 450, 200, 400, 400, 800, 500, 600, 900, 400, 800],
        fill: true,
        borderColor: "#FFAB2D",
        backgroundColor: "rgba(255, 171, 45, 0.2)",
        tension: 0.4,
        pointRadius: [5],
        pointBackgroundColor: "#FFAB2D",
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
    <div className="flex flex-1 flex-col gap-4 bg-white p-6">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Market Overview</h2>
          <span className="text-xs text-[#969BA0]">
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
        <button className="flex items-center gap-4 bg-[#F4F5F9] px-4">
          <span>Monthly (2020)</span>
          <span>
            <IconChevronDown width={14} height={8} color="#6418C3" />
          </span>
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4 w-1/2">
          <button className="group">
            <IconAll className="text-white group-hover:text-[#5F5F5F]" />
          </button>
          <button className="group">
            <IconBtc size={42} className="text-[#FFAB2D]" />
          </button>
          <button className="group">
            <IconEth
              size={42}
              className="text-[#BCBCBC] group-hover:text-[#DC3CCC]"
            />
          </button>
          <button className="group">
            <IconXpp
              size={42}
              className="text-[#BCBCBC] group-hover:text-[#2B98D6]"
            />
          </button>
          <button className="group">
            <IconLtc
              size={42}
              className="text-[#BCBCBC] group-hover:text-[#5F5F5F]"
            />
          </button>
        </div>
        <div className="flex items-center justify-end gap-2 w-1/2">
          <span className="text-xs text-[#969BA0]">Avarage</span>
          <span className="text-2xl font-semibold">45%</span>
        </div>
      </div>
      <div className="flex items-center w-full h-full">
        <Line data={data} options={options} width={300} />
      </div>
    </div>
  );
}
