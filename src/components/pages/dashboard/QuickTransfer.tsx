"use client";

import { useEffect, useState } from "react";
import { IconLtc, IconChevronDown, IconArrowRight } from "../../icons/Icones";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function QuickTransfer() {
  const [recentContacts, setRecentContacts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRecentContacts() {
      try {
        const response = await fetch("http://localhost:3001/recentContacts");
        if (!response.ok) {
          throw new Error("Erro ao carregar os contatos");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setRecentContacts(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os contatos:", error);
      }
    }
    fetchRecentContacts();
  }, []);
  return (
    <section className="flex flex-1 flex-col gap-4 bg-white p-6">
      <div className="flex items-center justify-between py-2">
        <div>
          <h2 className="text-2xl font-semibold">Quick transfer</h2>
          <span className="text-xs text-[#969BA0]">
            Lorem ispsum dolor sit amet, consectetur
          </span>
        </div>
        <button className="flex gap-6 px-6 py-3 items-center bg-gray-100">
          <div>
            <IconChevronDown width={14} height={8} color="#868686" />
          </div>
          <div className="flex gap-1">
            <span>23,511</span>
            <span>Ltc</span>
          </div>
          <div>
            <IconLtc size={42} color="#5F5F5F" />
          </div>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex border-2 border-[#EFEFEF]">
          <div className="flex items-center justify-center border-r-2 w-1/3 py-4">
            <span className="text-[#888888]">Amount BTC</span>
          </div>
          <div className="w-2/3 px-2 py-4">
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
      <div className="flex flex-col">
        <div className="flex items-center py-4 justify-between font-semibold">
          <h2 className="text-2xl">Recent Contacts</h2>
          <button className="text-[#6418C3]">View More</button>
        </div>
        <div className="">
          <Carousel>
            <CarouselContent>
              {recentContacts.length > 0 ? (
                recentContacts.map((recentContacts) => (
                  <CarouselItem key={recentContacts.id} className="basis-1/5">
                    <div>
                      <div className="bg-[#C4C4C4] h-20 w-2/3"></div>
                      <div className="flex flex-col">
                        <span className="font-medium">
                          {recentContacts.name}
                        </span>
                        <span className="text-sm font-light">
                          @{recentContacts.at}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))
              ) : (
                <div className="flex w-full">
                  {[...Array(6)].map((_, index) => (
                    <CarouselItem
                      key={`skeleton-${index}`}
                      className="basis-1/5"
                    >
                      <div>
                        <div className="bg-[#C4C4C4] h-20 w-2/3"></div>
                        <div className="flex flex-col">
                          <span className="font-medium">Name</span>
                          <span className="text-sm font-light">@</span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </div>
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="flex py-10">
        <div className="w-1/3">
          <span className="text-[13px] text-[#0C0C0CB2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </span>
        </div>
        <div className="flex justify-end gap-6 pl-8 w-2/3 text-white text-lg font-semibold">
          <button className="flex items-center justify-center w-full gap-4 px-6 bg-[#6418C3]">
            <span>TRANSFER NOW</span>
          </button>
        </div>
      </div>
    </section>
  );
}
