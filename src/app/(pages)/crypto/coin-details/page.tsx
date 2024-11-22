import Cryptos from "@/components/pages/crypto/CryptosDinamicos/CryptosDetails";
import HeaderCryto from "@/components/pages/crypto/Header";
import About from "@/components/pages/crypto/CryptosDinamicos/bitcoin/About";

export default function CoinDetails() {
  return (
    <div>
      <HeaderCryto />
      <div className="flex flex-col p-6">
        <Cryptos />
      </div>
    </div>
  );
}
