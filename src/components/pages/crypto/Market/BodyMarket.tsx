"use client";

import { useEffect, useState } from "react";
import {
  IconBtc,
  IconEth,
  IconXpp,
  IconLtc,
  IconDots,
} from "@/components/icons/Icones";
import Image from "next/image";
import graph from "@/images/graph-10.svg";

export default function BodyMarket() {
  const [market, setMarket] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMarket() {
      try {
        const response = await fetch("http://localhost:3001/marketCapital");
        if (!response.ok) {
          throw new Error("Erro ao carregar os contatos");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setMarket(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os contatos:", error);
      }
    }
    fetchMarket();
  }, []);

  const getCryptoIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "bitcoin":
        return <IconBtc color="#FFAB2D" size={36} />;
      case "xrp":
        return <IconBtc color="#FFAB2D" size={36} />;
      case "bitcoincash":
        return <IconBtc color="#FFAB2D" size={36} />;
      case "ethereum":
        return <IconEth color="#DC3CCC" size={36} />;
      case "ripple":
        return <IconXpp color="#2B98D6" size={36} />;
      case "tezos":
        return <IconXpp color="#2B98D6" size={36} />;
      case "litecoin":
        return <IconLtc color="#5F5F5F" size={36} />;
      case "chainlink":
        return <IconLtc color="#5F5F5F" size={36} />;
      default:
        return null;
    }
  };

  const getColorPosition = (rank: string, change: string) => {
    switch (rank) {
      case "#5":
        return <span className="text-[#FF2E2E] font-medium">{change}</span>;
      case "#6":
        return <span className="text-[#FF2E2E] font-medium">{change}</span>;
      case "#7":
        return <span className="text-[#FF2E2E] font-medium">{change}</span>;
      case "#10":
        return <span className="text-[#FF2E2E] font-medium">{change}</span>;
      default:
        return <span className="text-[#2BC155] font-medium">{change}</span>;
    }
  };

  return (
    <section className="bg-white pb-2">
      {market.map((market) => (
        <div
          key={market.id}
          className="flex w-full px-6 py-3 border-b border-[#F5F5F5]"
        >
          <div className="flex w-3/12">
            <div className="flex items-center gap-3 w-1/4">
              <span
                className={`p-4 rounded font-bold ${
                  market.rank === "#1" ||
                  market.rank === "#2" ||
                  market.rank === "#3"
                    ? "bg-[#6418C326] text-[#6418C3]"
                    : "bg-[#E3E3E326] text-[#787878]"
                }`}
              >
                {market.rank}
              </span>
            </div>
            <div className="flex items-center gap-3 w-3/4">
              {getCryptoIcon(market.coin)}
              <span className="font-medium capitalize">
                {market.coin === "xrp"
                  ? market.coin.toUpperCase()
                  : market.coin}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-2/12">
            <span className="font-semibold">{market.lastPrice}</span>
          </div>
          <div className="flex items-center gap-3 w-2/12">
            {getColorPosition(market.rank, market.change)}
          </div>
          <div className="flex items-center gap-3 w-2/12">
            <span className="font-medium">{market.volume}</span>
          </div>
          <div className="flex w-3/12">
            <div className="flex items-center gap-3 w-3/4">
              <span className="font-medium">
                <Image
                  alt="graphImage"
                  width={220}
                  height={48}
                  // Corrige o caminho removendo '/public'
                  src={market.graph.replace("/public", "")}
                />
              </span>
            </div>
            <div className="flex items-center justify-end w-1/4">
              <IconDots />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
