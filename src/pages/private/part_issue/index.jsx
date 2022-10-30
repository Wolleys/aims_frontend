import PartIssueTabs from "../../../components/tabs/part_issue";
import PrimaryLayout from "../../../components/shared/Layout/primary";
import { SelectedJobContextProvider } from "../../../context/SelectedJobContextProvider";

function PartIssue() {
  return (
    <SelectedJobContextProvider>
      <PrimaryLayout tabs={<PartIssueTabs />} />
    </SelectedJobContextProvider>
  );
}

export default PartIssue;
