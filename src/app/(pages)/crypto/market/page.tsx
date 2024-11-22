import HeaderCryto from "@/components/pages/crypto/Header";
import HeaderMarket from "@/components/pages/crypto/Market/HeaderMarket";
import BodyMarket from "@/components/pages/crypto/Market/BodyMarket";
import Actions from "@/components/pages/crypto/Market/ActionsMarket";
import FooterTransactions from "@/components/pages/transactions/FooterTransactions";

export default function MarketCapital() {
  return (
    <div className="flex flex-col w-full">
      <HeaderCryto />
      <div className="flex flex-col gap-6 p-6">
        <Actions />
        <div>
          <HeaderMarket />
          <BodyMarket />
        </div>
        <FooterTransactions />
      </div>
    </div>
  );
}
