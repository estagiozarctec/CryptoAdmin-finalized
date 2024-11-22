import Actions from "@/components/pages/transactions/ActionsTransactions";
import HeaderTable from "@/components/pages/transactions/HeaderTable";
import BodyTable from "@/components/pages/transactions/BodyTable";
import FooterTransactions from "@/components/pages/transactions/FooterTransactions";

export default function Transactions() {
  return (
    <section>
      <div className="flex flex-col gap-6 px-6 pt-6 pb-2">
        <Actions />
        <div>
          <HeaderTable />
          <BodyTable />
        </div>
        <FooterTransactions />
      </div>
    </section>
  );
}
