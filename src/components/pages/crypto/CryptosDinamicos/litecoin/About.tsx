import { IconDots, IconEth, IconLtc } from "@/components/icons/Icones";
import { IconChevronRight } from "@/components/icons/Icones";

export default function AboutLTC() {
  return (
    <div className="flex flex-col justify-between w-1/4 bg-white">
      <div className="flex flex-col gap-10 p-6">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">About</span>
          <IconDots />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-xl font-semibold">
          <IconLtc color="#5F5F5F" size={112} />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl">Litecoin</span>
            <span className="text-[#BFBFBFBF] text-sm font-semibold">LTC</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[#000000B2]">
          <p>
            Litecoin foi criado em 2011 por Charlie Lee como uma alternativa ao
            Bitcoin, com o objetivo de oferecer transações mais rápidas e
            econômicas. A rede Litecoin é baseada no mesmo código do Bitcoin,
            mas com modificações que permitem maior eficiência.
          </p>
          <p>
            Conhecido como a "prata digital" em comparação com o "ouro digital"
            do Bitcoin, o Litecoin é amplamente aceito em diversas plataformas e
            é frequentemente usado para pagamentos rápidos.
          </p>
          <p>
            Com tempos de bloqueio de apenas 2,5 minutos, o Litecoin continua
            sendo uma escolha confiável para usuários que desejam transações
            simples e rápidas.
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
