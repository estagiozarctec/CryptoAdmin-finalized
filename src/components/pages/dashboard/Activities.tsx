"use client";

import { useEffect, useState } from "react";
import {
  IconArrowDownRight,
  IconArrowUpLeft,
  IconBtc,
  IconEth,
  IconXpp,
  IconLtc,
} from "../../icons/Icones";

export default function RTActivities() {
  const [activity, setActivity] = useState<any[]>([]);

  useEffect(() => {
    async function fetchActivity() {
      try {
        const response = await fetch("http://localhost:3001/recentActivities");
        if (!response.ok) {
          throw new Error("Erro ao carregar os contatos");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setActivity(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os contatos:", error);
      }
    }
    fetchActivity();
  }, []);

  const getCryptoIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "bitcoin":
        return <IconBtc color="#FFAB2D" size={28} />;
      case "ethereum":
        return <IconEth color="#DC3CCC" size={28} />;
      case "ripple":
        return <IconXpp color="#2B98D6" size={28} />;
      case "litecoin":
        return <IconLtc color="#5F5F5F" size={28} />;
      default:
        return null;
    }
  };

  return (
    <section className="flex flex-1 flex-col gap-5 bg-white py-6">
      <div className="flex justify-between px-6">
        <div>
          <h2 className="text-xl font-semibold">Recent Trading Activities</h2>
          <span className="text-xs text-[#969BA0]">
            Lorem, ipsum dolor sit amet consectetur
          </span>
        </div>
        <div className="bg-[#F4F5F9]">
          <button className="bg-[#F4F5F9] text-[#969BA0] hover:text-white hover:bg-[#6418C3] p-4 transition-colors">
            Monthly
          </button>
          <button className="bg-[#F4F5F9] text-[#969BA0] hover:text-white hover:bg-[#6418C3] p-4 transition-colors">
            Weekly
          </button>
          <button className="bg-[#6418C3] text-white hover:text-white p-4">
            Today
          </button>
        </div>
      </div>
      <div className="flex flex-col pt-6 pb-14">
        {activity.length > 0 ? (
          activity.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center border-y border-[#F5F5F5] px-6 py-3 hover:shadow-[0px_2px_40px_#6518c32b,0px_-2px_40px_#6518c32b] transition-shadow"
            >
              <div className="flex items-center gap-5 w-2/5">
                <span className="bg-[#2BC1551A] p-4">
                  {activity.amount.includes("+") ? (
                    <IconArrowUpLeft size={28} color="#2BC155" />
                  ) : (
                    <IconArrowDownRight size={28} color="#2BC155" />
                  )}
                </span>
                <div className="flex items-center gap-2">
                  {getCryptoIcon(activity.coin)}
                  <span className="text-lg font-semibold capitalize">
                    {activity.coin}
                  </span>
                </div>
              </div>
              <span className="w-1/5">{activity.hour}</span>
              <div className="flex justify-between w-2/5">
                <span className="text-center font-semibold w-1/2">
                  {activity.amount}
                </span>
                <span
                  className={`text-end w-1/2 capitalize  ${
                    activity.status === "completed"
                      ? "text-[#2BC155]"
                      : activity.status === "pending"
                      ? "text-[#616161]"
                      : activity.status === "canceled"
                      ? "text-[#FF2E2E]"
                      : ""
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="flex justify-between items-center px-10 py-1"
              >
                <div className="flex items-center gap-4 w-2/5">
                  <div>
                    <div className="w-14 h-16 bg-zinc-700"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-600 rounded-full"></div>
                    <div className="w-24 h-4 bg-zinc-600 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <div className="w-24 h-3 bg-zinc-400 rounded"></div>
                </div>
                <div className="flex justify-center w-1/5">
                  <div className="w-12 h-4 bg-zinc-600 rounded"></div>
                </div>
                <div className="flex justify-end w-1/5">
                  <div className="w-16 h-4 bg-zinc-400 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
