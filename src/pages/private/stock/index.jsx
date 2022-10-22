import StockTabs from "../../../components/tabs/stock";
import PrimaryLayout from "../../../components/shared/Layout/primary";

function Stock() {
  return <PrimaryLayout tabs={<StockTabs />} />;
}

export default Stock;
