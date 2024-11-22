"use client";

import Image from "next/image";

import {
  IconPhone,
  IconEmail,
  IconDots,
  IconFacebook,
} from "@/components/icons/Icones";

import bitcoin from "@/images/coinBitcoin.svg";
import ethereum from "@/images/coinEthereum.svg";
import ripple from "@/images/coinRipple.svg";
import litecoin from "@/images/coinLitecoin.svg";
import { useEffect, useState } from "react";

export default function MyProfile() {
  const [coinHolding, setCoinHolding] = useState<any[]>([]);
  const [user, setUser] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCoinHolding() {
      try {
        const response = await fetch("http://localhost:3001/coinHolding");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setCoinHolding(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }
    fetchCoinHolding();
  }, []);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch("http://localhost:3001/userInfos");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setUser(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }
    fetchUser();
  }, []);

  const cryptoColors = {
    BTC: {
      bgColor: "bg-[rgba(255,171,45,0.2)]",
      borderColor: "border-[#FFAB2D]",
    },
    ETH: {
      bgColor: "bg-[rgba(220,60,204,0.2)]",
      borderColor: "border-[#DC3CCC]",
    },
    RPL: {
      bgColor: "bg-[rgba(43,152,214,0.2)]",
      borderColor: "border-[#2B98D6]",
    },
    LTC: {
      bgColor: "bg-[rgba(95,95,95,0.2)]",
      borderColor: "border-[#5F5F5F]",
    },
  };

  return (
    <section className="flex flex-col w-full bg-white">
      <div className="flex flex-col gap-6 border-b p-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap">
            <h2 className="text-xl font-semibold">My Profile</h2>
            <span className="text-xs text-[#969BA0]">Lorem ipsum</span>
          </div>
          <button>
            <IconDots />
          </button>
        </div>

        {user.map((user) => (
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 bg-zinc-300"></div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <span className="font-semibold text-2xl">{user.name}</span>
                <span className="font-light">{user.at}</span>
                <span>{user.joined}</span>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center justify-center bg-[#6418C3] w-8 h-8">
                  <IconPhone size={15} />
                </div>
                <div className="flex items-center justify-center bg-[#6418C3] w-8 h-8">
                  <IconEmail size={15} />
                </div>
                <div className="flex items-center justify-center bg-[#6418C3] w-8 h-8">
                  <IconFacebook size={15} />
                </div>
                <div className="flex px-6 items-center justify-center rounded-lg border border-zinc-400 ">
                  <span>Edit Profile</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col p-8">
        <span className="font-semibold py-4">Coin Holding</span>
        <div className="grid grid-cols-2 gap-6 w-full">
          {coinHolding.map((coin) => (
            <div key={coin.id} className="flex gap-8">
              <div
                className={`flex  ${cryptoColors[coin.coin].bgColor} ${
                  cryptoColors[coin.coin].borderColor
                } border gap-3 w-full px-6 py-4`}
              >
                <Image
                  src={
                    coin.Cripto === "BTC"
                      ? bitcoin
                      : coin.Cripto === "ETH"
                      ? ethereum
                      : coin.Cripto === "RPL"
                      ? ripple
                      : litecoin
                  }
                  alt={`${coin.Cripto} Background`}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <span className="font-bold text-xl">{coin.amount}</span>
                  <span className="font-medium">{coin.coin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
