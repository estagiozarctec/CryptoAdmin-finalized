import { IconBtc, IconDots } from "@/components/icons/Icones";
import { IconChevronRight } from "@/components/icons/Icones";

export default function AboutBTC() {
  return (
    <div className="flex flex-col justify-between w-1/4 bg-white">
      <div className="flex flex-col gap-10 p-6">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">About</span>
          <IconDots />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-xl font-semibold">
          <IconBtc color="#FFAB2D" size={112} />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl">Bitcoin</span>
            <span className="text-[#BFBFBFBF] text-sm font-semibold">BTC</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[#000000B2]">
          <p>
            O Bitcoin foi a primeira criptomoeda a registrar transações com
            sucesso em uma rede segura e descentralizada baseada em blockchain.
            Lançado no início de 2009 por seu criador pseudônimo, Satoshi
            Nakamoto, o Bitcoin é a maior criptomoeda em termos de capitalização
            de mercado e quantidade de dados armazenados em sua blockchain.
          </p>
          <p>
            O software do Bitcoin é gratuito e está disponível para qualquer
            pessoa que queira executar um nó da rede ou armazenar sua própria
            cópia da blockchain do Bitcoin.
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
