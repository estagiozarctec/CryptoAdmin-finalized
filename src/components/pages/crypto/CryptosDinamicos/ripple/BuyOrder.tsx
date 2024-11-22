"use client";
import {
  IconChevronTriangleRight,
  IconDots,
} from "@/components/icons/Icones";
import { useEffect, useState } from "react";

export default function BuyOrderXPP() {
  const [buy, setBuy] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBuy() {
      try {
        const response = await fetch("http://localhost:3001/buyOrder");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setBuy(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }
    fetchBuy();
  }, []);

  return (
    <section className="flex flex-col justify-between w-1/4 bg-white pt-6 pb-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between px-6">
          <h2 className="text-xl font-semibold">Buy Order</h2>
          <IconDots />
        </div>
        <div>
          <div className="flex text-[#6C6C6C] font-medium">
            <span className="w-1/3 text-center">Price</span>
            <span className="w-1/3 text-center">Amount</span>
            <span className="w-1/3 text-center">Total</span>
          </div>
          <div className="py-2">
            {buy.map((item, index) => (
              <div
                key="1"
                className="flex font-medium py-4 hover:bg-[#2B98D6] hover:text-white transition-colors"
              >
                <span className="w-1/3 text-center">{item.price}</span>
                <span className="w-1/3 text-center">{item.amount}</span>
                <span className="w-1/3 text-center">{item.total}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full px-6">
        <button className="flex flex-1 items-center justify-center gap-2 px-4 py-2 hover:bg-[#2b97d625] transition-colors">
          <span className="text-[#6418C3] font-semibold">Show more</span>
          <IconChevronTriangleRight size={12} color="#C4C5CD" />
        </button>
      </div>
    </section>
  );
}
