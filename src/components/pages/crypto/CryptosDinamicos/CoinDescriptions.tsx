import AboutBTC from "./bitcoin/About";
import BuyOrderBTC from "./bitcoin/BuyOrder";
import CoinChartBTC from "./bitcoin/CoinChart";
import QuickTradeBTC from "./bitcoin/QuickTrade";
import SellOrderBTC from "./bitcoin/SellOrder";
import AboutETH from "./ethereum/About";
import BuyOrderETH from "./ethereum/BuyOrder";
import CoinChartETH from "./ethereum/CoinChart";
import QuickTradeETH from "./ethereum/QuickTrade";
import SellOrderETH from "./ethereum/SellOrder";
import AboutLTC from "./litecoin/About";
import BuyOrderLTC from "./litecoin/BuyOrder";
import CoinChartLTC from "./litecoin/CoinChart";
import QuickTradeLTC from "./litecoin/QuickTrade";
import SellOrderLTC from "./litecoin/SellOrder";
import AboutXPP from "./ripple/About";
import BuyOrderXPP from "./ripple/BuyOrder";
import CoinChartXPP from "./ripple/CoinChart";
import QuickTradeXPP from "./ripple/QuickTrade";
import SellOrderXPP from "./ripple/SellOrder";

export function BitcoinDescription() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <CoinChartBTC />
        <AboutBTC />
      </div>
      <div className="flex w-full gap-6">
        <SellOrderBTC />
        <BuyOrderBTC />
        <QuickTradeBTC />
      </div>
    </div>
  );
}

export function EthereumDescription() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <CoinChartETH />
        <AboutETH />
      </div>
      <div className="flex w-full gap-6">
        <SellOrderETH />
        <BuyOrderETH />
        <QuickTradeETH />
      </div>
    </div>
  );
}

export function RippleDescription() {
  return (
    <div className="flex flex-col gap-6">
    <div className="flex gap-6">
      <CoinChartXPP />
      <AboutXPP />
    </div>
    <div className="flex w-full gap-6">
      <SellOrderXPP />
      <BuyOrderXPP />
      <QuickTradeXPP />
    </div>
  </div>
  );
}

export function LitecoinDescription() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <CoinChartLTC />
        <AboutLTC />
      </div>
      <div className="flex w-full gap-6">
        <SellOrderLTC />
        <BuyOrderLTC />
        <QuickTradeLTC />
      </div>
    </div>
  );
}
