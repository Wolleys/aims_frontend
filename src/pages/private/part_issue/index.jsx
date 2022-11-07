import PartIssueTabs from "../../../components/tabs/part_issue";
import PrimaryLayout from "../../../components/shared/Layout/primary";
import { CloseJobContextProvider } from "../../../context/CloseJobContextProvider";
import { SelectedJobContextProvider } from "../../../context/SelectedJobContextProvider";

function PartIssue() {
  return (
    <SelectedJobContextProvider>
      <CloseJobContextProvider>
        <PrimaryLayout tabs={<PartIssueTabs />} />
      </CloseJobContextProvider>
    </SelectedJobContextProvider>
  );
}

export default PartIssue;
