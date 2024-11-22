 "use client";

import { IconDots } from "../../icons/Icones";
import Image from "next/image";
import cardBg from "@/images/cardBg.png";
import cardIcon1 from "@/images/cardIcon1.png";
import cardIcon2 from "@/images/cardIcon2.png";
import { useEffect, useState } from "react";

export default function Cards() {
  const [card, setCard] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCard() {
      try {
        const response = await fetch("http://localhost:3001/cardInfos");
        if (!response.ok) {
          throw new Error("Erro ao carregar os contatos");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setCard(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os contatos:", error);
      }
    }
    fetchCard();
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 bg-white p-6">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Cards</h2>
          <span className="text-xs text-[#969BA0]">
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
        <button className="flex items-center gap-4 bg-[#F4F5F9] px-4">
          <span>Settings</span>
          <IconDots />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex items-center justify-center w-11/12 h-[480px] bg-cover bg-center text-white pb-6"
          style={{ backgroundImage: `url(${cardBg.src})` }}
        >
          {card.length > 0 ? (
            card.map((card) => (
              <div key={card.id} className="flex flex-col gap-12 w-2/3">
                <div className="flex items-center justify-between">
                  <Image alt="cardIcon1" src={cardIcon1} width={72}></Image>
                  <span className="text-lg">
                    {"**** **** **** " + card.cardCode.slice(-4)}
                  </span>
                </div>
                <div className="flex flex-col items-start justify-between">
                  <span>Main Balance</span>
                  <span className="text-4xl font-semibold">
                    {card.totalAmount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[#FFFFFF99] text-sm">VALID THRU</span>
                    <span>{card.valid}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#FFFFFF99] text-sm">
                      CARD HOLDER
                    </span>
                    <span>{card.cardHolder}</span>
                  </div>
                  <div>
                    <Image alt="cardIcon1" src={cardIcon2} width={84}></Image>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-12 w-2/3">
              <div className="flex items-center justify-between">
                <Image alt="cardIcon1" src={cardIcon1} width={72}></Image>
                <span className="text-lg">
                  **** **** **** ****
                </span>
              </div>
              <div className="flex flex-col items-start justify-between">
                <span>Main Balance</span>
                <span className="text-4xl font-semibold">
                  000,000.00
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[#FFFFFF99] text-sm">VALID THRU</span>
                  <span>00/00</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#FFFFFF99] text-sm">CARD HOLDER</span>
                  <span>X X</span>
                </div>
                <div>
                  <Image alt="cardIcon1" src={cardIcon2} width={84}></Image>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex px-24 w-full">
          {card.length > 0 ? (
            card.map((card) => (
              <div key={card.id} className="flex gap-4 w-2/3">
                <span className="rounded-full p-3 border border-[#E1E5FF] text-[#3B4CB8]">
                  71%
                </span>
                <div className="flex flex-col">
                  <span className="text-xs">Monthly Limits</span>
                  <span className="text-2xl font-semibold">
                    ${card.availabeLimit} of {card.totalLimit}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex gap-4 w-2/3">
              <span className="rounded-full p-3 border border-[#E1E5FF] text-[#3B4CB8]">
                71%
              </span>
              <div className="flex flex-col">
                <span className="text-xs">Monthly Limits</span>
                <span className="flex gap-4 text-2xl font-semibold">
                  $00,00 of 00,00
                </span>
              </div>
            </div>
          )}
          <button className="flex items-center justify-end w-1/3">
            <span className="text-[#6418C3] font-semibold">View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
