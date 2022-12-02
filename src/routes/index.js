import { useContext, lazy, Suspense } from "react";
import PrivateRoute from "./PrivateRoute";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/shared/Loader";
import { AuthContext } from "../context/AuthContextProvider";

const NotFound = lazy(() => import("../pages/public/not_found"));
const Login = lazy(() => import("../pages/public/login"));
const ForgotPassword = lazy(() => import("../pages/public/forgot_pass"));

const Dashboard = lazy(() => import("../pages/private/dash_board"));
const Overview = lazy(() => import("../pages/private/dash_board/Overview"));
const Sales = lazy(() => import("../pages/private/dash_board/Sales"));

const Stock = lazy(() => import("../pages/private/stock"));
const DefaultStock = lazy(() => import("../pages/private/stock/Default"));

const PartEntry = lazy(() => import("../pages/private/part_entry"));
const DefaultPartEntry = lazy(() => import("../pages/private/part_entry/Default"));
const AddPart = lazy(() => import("../pages/private/part_entry/actions/default/add_part"));
const EditPart = lazy(() => import("../pages/private/part_entry/actions/default/edit_part"));
const PurchaseHistory = lazy(() => import("../pages/private/part_entry/actions/default/purchase_history"));
const NewPurchase = lazy(() => import("../pages/private/part_entry/actions/default/purchase_history/new_purchase"));
const EditPurchase = lazy(() => import("../pages/private/part_entry/actions/default/purchase_history/edit_purchase"));
const IssueHistory = lazy(() => import("../pages/private/part_entry/actions/default/issue_history"));
const PurchasePart = lazy(() => import("../pages/private/part_entry/actions/default/purchase_part"));

const Jobs = lazy(() => import("../pages/private/jobs"));
const DefaultJobsList = lazy(() => import("../pages/private/jobs/Default"));
const OpenJob = lazy(() => import("../pages/private/jobs/actions/open_job"));
const EditJob = lazy(() => import("../pages/private/jobs/actions/edit_job"));
const JobProfile = lazy(() => import("../pages/private/jobs/actions/job_profile"));

const PartIssue = lazy(() => import("../pages/private/part_issue"));
const DefaultPartIssue = lazy(() => import("../pages/private/part_issue/Default"));

const HangarUse = lazy(() => import("../pages/private/hangar_use"));
const DefaultHangarUse = lazy(() => import("../pages/private/hangar_use/Default"));
const IssuePart = lazy(() => import("../pages/private/hangar_use/actions/default/issue_part"));
const EditIssuedPart = lazy(() => import("../pages/private/hangar_use/actions/default/edit_issue"));

function AppRoutes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="dashboard" element={<PrivateRoute isAuth={isAuth}> <Dashboard /> </PrivateRoute>}>
          <Route path="overview" element={<Overview />} />
          <Route path="sales" element={<Sales />} />
        </Route>
        <Route path="stock" element={<PrivateRoute isAuth={isAuth}> <Stock /> </PrivateRoute>} >
          <Route path="default" element={<DefaultStock />} />
        </Route>
        <Route path="part-entry" element={<PrivateRoute isAuth={isAuth}> <PartEntry /> </PrivateRoute>} >
          <Route path="default" element={<DefaultPartEntry />} />
          <Route path="default/add-part" element={<AddPart />} />
          <Route path="default/edit-part/:partId" element={<EditPart />} />
          <Route path="default/purchase-history/:partId" element={<PurchaseHistory />} />
          <Route path="default/purchase-history/new-purchase" element={<NewPurchase />} />
          <Route path="default/purchase-history/edit-part/:partId" element={<EditPurchase />} />
          <Route path="default/issue-history/:partId" element={<IssueHistory />} />
          <Route path="default/purchase-part/:partId" element={<PurchasePart />} />
        </Route>
        <Route path="jobs" element={<PrivateRoute isAuth={isAuth}> <Jobs /> </PrivateRoute>} >
          <Route path="jobs-list" element={<DefaultJobsList />} />
          <Route path="open-job" element={<OpenJob />} />
          <Route path="edit-job/:jobId" element={<EditJob />} />
          <Route path="job-profile/:jobId" element={<JobProfile />} />
        </Route>
        <Route path="part-issue" element={<PrivateRoute isAuth={isAuth}> <PartIssue /> </PrivateRoute>} >
          <Route path="default" element={<DefaultPartIssue />} />
        </Route>
        <Route path="hangar-use" element={<PrivateRoute isAuth={isAuth}> <HangarUse /> </PrivateRoute>} >
          <Route path="default" element={<DefaultHangarUse />} />
          <Route path="default/issue-part" element={<IssuePart />} />
          <Route path="default/edit-issue/:partId" element={<EditIssuedPart />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
