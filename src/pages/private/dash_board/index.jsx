import DashboardTabs from "../../../components/tabs/dashboard";
import PrimaryLayout from "../../../components/shared/Layout/primary";

function Dashboard() {
  return <PrimaryLayout tabs={<DashboardTabs />} />;
}

export default Dashboard;
