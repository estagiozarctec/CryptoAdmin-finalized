import CryptosGraph from "@/components/pages/dashboard/CryptosGraph";
import QuickTrade from "@/components/pages/dashboard/QuickTrade";
import MarketOverview from "@/components/pages/dashboard/MarketOverview";
import QuickTransfer from "@/components/pages/dashboard/QuickTransfer";
import Cards from "@/components/pages/dashboard/Cards";
import Activities from "@/components/pages/dashboard/Activities";
import SellOrder from "@/components/pages/dashboard/SellOrder";
import BuyOrder from "@/components/pages/dashboard/BuyOrder";
import Actions from "@/components/pages/dashboard/ActionsDashboard";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 w-full h-full items-start mb-8  px-6 pt-6 pb-2">
      <Actions />
      <CryptosGraph />
      <div className="w-full flex gap-6">
        <MarketOverview />
        <Cards />
      </div>
      <div className="w-full flex gap-6">
        <Activities />
        <div className="flex flex-1 gap-6">
          <SellOrder />
          <BuyOrder />
        </div>
      </div>
      <div className="w-full flex gap-6">
        <QuickTrade />
        <QuickTransfer />
      </div>
    </div>
  );
}
