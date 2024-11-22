import Contacts from "@/components/pages/portofolio/Contacts";
import MyActivity from "@/components/pages/portofolio/MyActivity";
import MyProfile from "@/components/pages/portofolio/MyProfile";
import PortifolioChart from "@/components/pages/portofolio/PortofolioChart";

export default function Portofolio() {
  return (
    <div className="flex gap-10 w-full p-10">
      <div className="flex flex-col gap-10 w-1/2">
        <MyProfile />
        <MyActivity />
      </div>
      <div className="flex gap-10 flex-col w-1/2">
        <Contacts />
        <PortifolioChart/>
      </div>
    </div>
  );
}
