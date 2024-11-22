"use client";

import { IconArrowDown, IconArrowUp } from "@/components/icons/Icones";
import { useEffect, useState } from "react";

export default function WalletActivity() {
  const [walletActivity, setWalletActivity] = useState<any[]>([]);

  useEffect(() => {
    async function fetchWalletActivity() {
      try {
        const response = await fetch("http://localhost:3001/recentActivities");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setWalletActivity(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchWalletActivity();
  }, []);

  return (
    <section className="bg-white">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between w-full p-6">
          <div className="">
            <h2 className="text-xl font-semibold">Wallet Activity</h2>
            <span className="text-xs text-[#969BA0]">
              Lorem ipsum dolor sit amet consectetur
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
        <div className="flex flex-col w-full pb-6">
          {walletActivity.length > 0 ? (
            walletActivity.map((walletActivity) => (
              <div
                key={walletActivity.id}
                className="flex justify-between items-center px-10 py-2 border-b border-[#F5F5F5]"
              >
                <div className="flex gap-2 w-2/4 font-semibold">
                  <span className="bg-[#6418C31A] p-4 rounded-[2px]">
                    {walletActivity.amount.includes("+") ? (
                      <IconArrowUp color="#6418C3" size={27} />
                    ) : (
                      <IconArrowDown color="#6418C3" size={27} />
                    )}
                  </span>
                  <div className="flex flex-col justify-between py-1">
                    <span className="text-sm text-black capitalize">
                      {walletActivity.transfer}
                    </span>
                    <span className="text-xs text-[#0000007b]">
                      {walletActivity.date}
                    </span>
                  </div>
                </div>
                <span className="font-medium text-sm text-centerw-1/4">
                  {walletActivity.amount}
                </span>
                <span
                  className={`font-semibold text-sm text-center w-1/4 uppercase ${
                    walletActivity.status === "completed"
                      ? "text-[#2BC155]"
                      : walletActivity.status === "pending"
                      ? "text-[#616161]"
                      : walletActivity.status === "canceled"
                      ? "text-[#FF2E2E]"
                      : ""
                  }`}
                >
                  {walletActivity.status}
                </span>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-4">
              {[...Array(6)].map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="flex justify-between items-center px-10"
                >
                  <div className="flex items-center gap-2 w-2/3">
                    <div className="w-14 h-14 bg-zinc-700"></div>
                    <div className="flex flex-col gap-1">
                      <div className="w-24 h-4 bg-zinc-600 rounded"></div>
                      <div className="w-16 h-3 bg-zinc-400 rounded"></div>
                    </div>
                  </div>
                  <div className="flex justify-evenly gap-8 w-1/3">
                    <div className="w-1/4 h-4 bg-zinc-400 rounded"></div>
                    <div className="w-1/4 h-4 bg-zinc-600 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
