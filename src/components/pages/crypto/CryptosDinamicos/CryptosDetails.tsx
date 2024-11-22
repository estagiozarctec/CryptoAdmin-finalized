"use client";

import { useEffect, useState } from "react";
import bgBitcoin from "@/images/bgBitcoin.svg";
import bgEthereum from "@/images/bgEthereum.svg";
import bgRipple from "@/images/bgRipple.svg";
import bgLitecoin from "@/images/bgLitecoin.svg";
import {
  IconBtc,
  IconEth,
  IconLtc,
  IconXpp,
  IconSelector,
} from "../../../icons/Icones";
import {
  BitcoinDescription,
  EthereumDescription,
  LitecoinDescription,
  RippleDescription,
} from "./CoinDescriptions";

export default function Cryptos() {
  const [cryptos, setCryptos] = useState<any[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCryptos() {
      try {
        const response = await fetch("http://localhost:3001/cryptoAmount");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setCryptos(data);
        } else {
          console.error("Formato de dados inválido", data);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchCryptos();
  }, []);

  const getCryptoIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "bitcoin":
        return <IconBtc color="#FFAB2D" size={52} />;
      case "ethereum":
        return <IconEth color="#DC3CCC" size={52} />;
      case "ripple":
        return <IconXpp color="#2B98D6" size={52} />;
      case "litecoin":
        return <IconLtc color="#5F5F5F" size={52} />;
      default:
        return null;
    }
  };

  const getCryptoBg = (name: string) => {
    switch (name.toLowerCase()) {
      case "bitcoin":
        return bgBitcoin;
      case "ethereum":
        return bgEthereum;
      case "ripple":
        return bgRipple;
      case "litecoin":
        return bgLitecoin;
      default:
        return null;
    }
  };

  const getCryptoColor = (name: string) => {
    switch (name.toLowerCase()) {
      case "bitcoin":
        return "#FFAB2D";
      case "ethereum":
        return "#DC3CCC";
      case "ripple":
        return "#2B98D6";
      case "litecoin":
        return "#5F5F5F";
      default:
        return "#000000";
    }
  };

  const getCryptoDescription = (name: string) => {
    switch (name.toLowerCase()) {
      case "bitcoin":
        return <BitcoinDescription />;
      case "ethereum":
        return <EthereumDescription />;
      case "ripple":
        return <RippleDescription />;
      case "litecoin":
        return <LitecoinDescription />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        {cryptos.length > 0 ? (
          cryptos.map((crypto, index) => (
            <button
              key={crypto.id}
              onClick={() => setSelectedCrypto(index)}
              className="flex items-center justify-between w-1/4 px-4 py-8 relative"
              style={{
                backgroundColor: getCryptoColor(crypto.coin),
                backgroundImage: `url(${getCryptoBg(crypto.coin)?.src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col items-start gap-1 text-white">
                <span className="text-lg font-medium capitalize">
                  {crypto.coin}
                </span>
                <span className="text-2xl font-semibold">${crypto.amount}</span>
              </div>
              <span className="bg-white p-2">{getCryptoIcon(crypto.coin)}</span>
              {selectedCrypto === index && (
                <div
                  className="absolute bottom-0 left-0 h-1 w-full bg-white"
                  style={{ backgroundColor: getCryptoColor(crypto.coin) }}
                ></div>
              )}
            </button>
          ))
        ) : (
          <div className="flex gap-6 w-full">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-1/4 bg-white h-[124px] flex items-center justify-between px-4"
              >
                <div className="w-1/2 flex flex-col gap-1">
                  <div className="bg-zinc-500 w-1/4 h-8"></div>
                  <span className="bg-zinc-300 w-2/4 h-4"></span>
                </div>
                <div className="bg-zinc-500 h-14 w-14"></div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full bg-[#E5E5E5]">
        <div className="flex gap-6">
          {cryptos.length > 0 &&
            cryptos.map((crypto, index) => (
              <div
                key={`line-${index}`}
                className="h-1 w-1/4 relative"
                style={{
                  backgroundColor:
                    selectedCrypto === index
                      ? getCryptoColor(crypto.coin)
                      : "#E5E5E5",
                }}
              >
                {selectedCrypto === index && (
                  <IconSelector
                    color={getCryptoColor(crypto.coin)}
                    size={20}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2"
                  />
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="mt-4">
        {selectedCrypto !== null ? (
          getCryptoDescription(cryptos[selectedCrypto]?.coin)
        ) : (
          <p>Selecione uma criptomoeda para ver os detalhes.</p>
        )}
      </div>
    </div>
  );
}
