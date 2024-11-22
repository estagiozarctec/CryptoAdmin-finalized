import { IconDots, IconEth } from "@/components/icons/Icones";
import { IconChevronRight } from "@/components/icons/Icones";

export default function AboutETH() {
  return (
    <div className="flex flex-col justify-between w-1/4 bg-white">
      <div className="flex flex-col gap-10 p-6">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">About</span>
          <IconDots />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-xl font-semibold">
          <IconEth color="#DC3CCC" size={112} />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl">Ethereum</span>
            <span className="text-[#BFBFBFBF] text-sm font-semibold">ETH</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[#000000B2]">
          <p>
            Ethereum é uma plataforma descentralizada que permite a criação de
            contratos inteligentes e aplicativos descentralizados (dApps).
            Lançado em 2015 por Vitalik Buterin e outros cofundadores, Ethereum
            revolucionou o blockchain ao introduzir a funcionalidade de
            programação.
          </p>
          <p>
            A rede é alimentada pelo Ether (ETH), sua criptomoeda nativa, que é
            amplamente usada como combustível para transações e desenvolvimento
            de aplicações na blockchain.
          </p>
          <p>
            O Ethereum também está liderando inovações como o Ethereum 2.0, que
            visa melhorar a escalabilidade, segurança e sustentabilidade da
            rede.
          </p>
        </div>
      </div>
      <button className="flex items-center justify-between hover:bg-[#FBFBFB] p-6">
        <span className="text-[#6418C3] font-semibold">Read More</span>
        <IconChevronRight />
      </button>
    </div>
  );
}
