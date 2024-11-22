import MyCards from "@/components/pages/wallet/MyCards";
import WalletActivity from "@/components/pages/wallet/WalletActivity";
import OverviewBalance from "@/components/pages/wallet/OverviewBalance";
import TopUpWithdraw from "@/components/pages/wallet/TopUpWithdraw";
import Transfer from "@/components/pages/wallet/Transfer";

export default function MyWallet() {
  return (
    <div className="flex gap-6 w-full px-6 pt-6 pb-2">
      <div className="flex flex-col gap-6 w-1/2">
        <MyCards />
        <Transfer />
      </div>
      <div className="flex flex-col gap-6 w-1/2">
        <TopUpWithdraw />
        <OverviewBalance />
        <WalletActivity />
      </div>
    </div>
  );
}
