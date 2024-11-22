"use client";
import {
  IconChevronDown,
  IconChevronTriangleRight,
  IconDots,
  IconXpp,
} from "../../icons/Icones";
import { useEffect, useState } from "react";

export default function BuyOrder() {
  const [buyOrder, setBuyOrder] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBuyOrder() {
      try {
        const response = await fetch("http://localhost:3001/buyOrder");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setBuyOrder(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }
    fetchBuyOrder();
  }, []);

  return (
    <section className="flex flex-1 flex-col gap-6 bg-white py-6">
      <div className="flex items-center justify-between px-6">
        <h2 className="text-xl font-semibold">Buy Order</h2>
        <IconDots />
      </div>
      <button className="flex justify-between hover:bg-[#FBFBFB] px-6 py-3">
        <div className="flex items-center gap-2">
          <IconXpp size={50} color="#2B98D6" />
          <span className="font-semibold text-lg">Ripple</span>
        </div>
        <IconChevronDown width={16} color="#868686" />
      </button>
      <div>
        <div className="flex text-[#6C6C6C]">
          <span className="w-1/3 text-center">Price</span>
          <span className="w-1/3 text-center">Amount</span>
          <span className="w-1/3 text-center">Total</span>
        </div>
        <div className="py-2">
          {buyOrder.length > 0 ? (
            buyOrder.map((buyOrder) => (
              <div
                key={buyOrder.id}
                className="flex font-medium py-4 hover:bg-[#2B98D6] hover:text-white transition-colors"
              >
                <span className="w-1/3 text-center">{buyOrder.price}</span>
                <span className="w-1/3 text-center">{buyOrder.amount}</span>
                <span className="w-1/3 text-center">{buyOrder.total}</span>
              </div>
            ))
          ) : (
            <div className="flex flex-col gap-4">
              {[...Array(8)].map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="flex justify-between items-center px-10 py-3"
                >
                  <div className="flex justify-center">
                    <div className="w-8 h-4 bg-zinc-500 rounded"></div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-6 h-4 bg-zinc-400 rounded"></div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-10 h-4 bg-zinc-600 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center w-full px-6">
          <button className="flex flex-1 items-center justify-center gap-2 px-4 py-2 hover:bg-[#2b97d625] transition-colors">
            <span className="text-[#6418C3] font-semibold">Show more</span>
            <IconChevronTriangleRight size={12} color="#C4C5CD" />
          </button>
        </div>
      </div>
    </section>
  );
}
