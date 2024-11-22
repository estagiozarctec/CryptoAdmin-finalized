"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  IconCrypto,
  IconDashboard,
  IconExchange,
  IconSettings,
  IconTransaction,
  IconWallet,
  IconArrowRight,
  IconMenuHamburguer,
} from "../icons/Icones";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/logo.png";
import { usePathname } from "next/navigation";

export default function MenuLateral() {
  const pathname = usePathname();

  return (
    <div className="bg-white py-4">
      <div className="relative px-6 mb-4">
        <Image alt="logoImage" src={Logo} height={40} className="m-auto" />
      </div>
      <nav className="mb-4">
        <Link
          href={"/"}
          className={`flex gap-4 px-6 py-3 hover:bg-[#FAFBFF] hover:border-l-8 hover:border-[#6418C3] hover:text-[#6418C3] transition-all ${
            pathname === "/" || pathname === "/portofolio"
              ? "bg-[#FAFBFF] border-[#6418C3] border-l-8 text-[#6418C3]"
              : "text-[#BFBFBF]"
          }`}
        >
          <IconDashboard></IconDashboard>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <Accordion
          type="single"
          collapsible
          className={`flex px-6 transition-all group hover:bg-[#FAFBFF] hover:border-l-8 hover:border-[#6418C3] ${
            pathname === "/wallet"
              ? "border-l-8 border-[#6418C3] bg-[#FAFBFF] *:text-[#6418C3]"
              : ""
          }`}
        >
          <AccordionItem value="item-1" className="flex-1">
            <AccordionTrigger>
              <span
                className={`flex gap-4 transition-all ${
                  pathname === "/wallet" ? "*:text-[#6418C3]" : ""
                }`}
              >
                <IconWallet></IconWallet>
                <span>My wallet</span>
              </span>
            </AccordionTrigger>
            <Link className="flex flex-1" href={"/wallet"}>
              <AccordionContent>My Wallet</AccordionContent>
            </Link>
            <AccordionContent>Add New</AccordionContent>
            <AccordionContent>Card List</AccordionContent>
            <AccordionContent>History</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className={`flex px-6 transition-all group hover:bg-[#FAFBFF] hover:border-l-8 hover:border-[#6418C3] ${
            pathname === "/transactions"
              ? "border-l-8 border-[#6418C3] bg-[#FAFBFF] *:text-[#6418C3]"
              : ""
          }`}
        >
          <AccordionItem value="item-1" className="flex-1">
            <AccordionTrigger>
              <span
                className={`flex gap-4 transition-all ${
                  pathname === "/transactions" ? "*:text-[#6418C3]" : ""
                }`}
              >
                <IconTransaction></IconTransaction>
                <span>Transaction</span>
              </span>
            </AccordionTrigger>
            <Link href={"/transactions"}>
              <AccordionContent>Transactions</AccordionContent>
            </Link>
            <AccordionContent>Add New</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className={`flex px-6 transition-all group hover:bg-[#FAFBFF] hover:border-l-8 hover:border-[#6418C3] ${
            pathname === "/crypto/coin-details"
              ? "border-l-8 border-[#6418C3] bg-[#FAFBFF] *:text-[#6418C3]"
              : ""
          }`}
        >
          <AccordionItem value="item-1" className="flex-1">
            <AccordionTrigger>
              <span
                className={`flex gap-4 transition-all ${
                  pathname === "/crypto/coin-details" ? "*:text-[#6418C3]" : ""
                }`}
              >
                <IconCrypto></IconCrypto>
                <span>Crypto</span>
              </span>
            </AccordionTrigger>
            <Link href={"/crypto/coin-details"}>
              <AccordionContent>Coin Details</AccordionContent>
            </Link>
            
            <Link href={"/crypto/market/"}>
              <AccordionContent>Market Capital</AccordionContent>
            </Link>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className={`flex px-6 transition-all group hover:bg-[#FAFBFF] hover:border-l-8 hover:border-[#6418C3] ${
            pathname === "/exchange"
              ? "border-l-8 border-[#6418C3] bg-[#FAFBFF] *:text-[#6418C3]"
              : ""
          }`}
        >
          <AccordionItem value="item-1" className="flex-1">
            <AccordionTrigger>
              <span className="flex gap-4 text-[#BFBFBF] group-hover:text-[#6418C3] transition-all">
                <IconExchange></IconExchange>
                <span>Exchange</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>Add New</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className={`flex px-6 transition-all group hover:bg-[#FAFBFF] hover:border-l-8 hover:border-[#6418C3] ${
            pathname === "/settings"
              ? "border-l-8 border-[#6418C3] bg-[#FAFBFF] *:text-[#6418C3]"
              : ""
          }`}
        >
          <AccordionItem value="item-1" className="flex-1  ">
            <AccordionTrigger>
              <span className="flex gap-4 text-[#BFBFBF] group-hover:text-[#6418C3] transition-all">
                <IconSettings></IconSettings>
                <span>Settings</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>Add New</AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
      <div className="flex flex-col gap-4 w-4/5 m-auto">
        <div className="flex flex-col gap-2 bg-[#3C255A] p-3">
          <span className="text-white">
            Generate Monthly <br /> Credit Report
          </span>
          <div className="flex items-center justify-between">
            <IconArrowRight />
            <IconMenuHamburguer></IconMenuHamburguer>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[10px] text-[#969BA0]">
          <div className="flex flex-col">
            <span className="font-bold">Davur Restaurant Admin Dashboard</span>
            <span>© 2020 All Rights Reserved</span>
          </div>
          <span>Made with ❤️ by Peterdraw</span>
        </div>
      </div>
    </div>
  );
}
