import PartEntryTabs from "../../components/tabs/part_entry";
import PrimaryLayout from "../../components/shared/Layout/primary";

function PartEntry() {
  return <PrimaryLayout tabs={<PartEntryTabs />} />;
}

export default PartEntry;
