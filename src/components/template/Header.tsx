"use client";
import { usePathname } from "next/navigation";
import {
  IconChat,
  IconHeaderSettings,
  IconNotificantion,
  IconPromos,
} from "../icons/Icones";
import Link from "next/link";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/portofolio": "Portofolio",
  "/wallet": "My Wallet",
  "/transactions": "Transactions",
  "/crypto": "Crypto",
  "/crypto/coin-details": "Coin Details",
  "/exchange": "Exchange",
  "/settings": "Settings",
  "/crypto/market": "Market Capital",
};

export default function Header() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Erro ao buscar o pathName";

  return (
    <header className="flex justify-between bg-white h-[60px] py-5">
      <div className="flex flex-1 items-center justify-between h-full border-r border-slate-300 px-4">
        <span className="text-lg text-black font-semibold">{title}</span>
        <div className="flex gap-3 items-center">
          <button className="relative p-3">
            <IconNotificantion />
            <span className="bg-[#6418C3] text-white text-[10px] font-bold w-4 h-4 text-center absolute -top-0 -right-0">
              12
            </span>
          </button>
          <button className="relative p-3">
            <IconChat />
            <span className="bg-[#6418C3] text-white text-[10px] font-bold w-4 h-4 text-center absolute -top-0 -right-0">
              12
            </span>
          </button>
          <button className="relative p-3">
            <IconPromos />
            <span className="bg-[#6418C3] text-white text-[10px] font-bold w-4 h-4 text-center absolute -top-0 -right-0">
              12
            </span>
          </button>
          <button className="relative p-3">
            <IconHeaderSettings />
            <span className="bg-[#FF6D4C] text-white text-[10px] font-bold w-4 h-4 text-center absolute -top-0 -right-0">
              !
            </span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 px-4">
        <div className="flex flex-col gap-[2px] items-end text-xs">
          <span className="text-zinc-800">
            Hello, <span className="font-semibold">Thomas</span>
          </span>
          <span className="text-zinc-400">Super Admin</span>
        </div>
        <Link href={"/portofolio"}>
          <button className="bg-[#C4C4C4] w-10 h-10"></button>
        </Link>
      </div>
    </header>
  );
}
