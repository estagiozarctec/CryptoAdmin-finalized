import { IconDots, IconXpp } from "@/components/icons/Icones";
import { IconChevronRight } from "@/components/icons/Icones";

export default function AboutXPP() {
  return (
    <div className="flex flex-col justify-between w-1/4 bg-white">
      <div className="flex flex-col gap-10 p-6">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">About</span>
          <IconDots />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-xl font-semibold">
          <IconXpp color="#2B98D6" size={112} />
          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl">Ripple</span>
            <span className="text-[#BFBFBFBF] text-sm font-semibold">XPP</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-[#000000B2]">
          <p>
            Ripple é um sistema de pagamento digital e uma rede de câmbio criada
            para facilitar transferências rápidas e baratas entre fronteiras.
            Lançado em 2012, o protocolo da Ripple é projetado para bancos e
            instituições financeiras, oferecendo uma alternativa eficiente ao
            sistema SWIFT.
          </p>
          <p>
            A criptomoeda XRP atua como uma ponte entre moedas fiduciárias,
            permitindo liquidez instantânea para pagamentos globais.
          </p>
          <p>
            Com transações que são liquidadas em poucos segundos, Ripple é uma
            das soluções mais rápidas e inovadoras no setor financeiro
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
