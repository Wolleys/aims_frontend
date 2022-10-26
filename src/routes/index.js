import { useContext } from "react";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/public/not_found";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

import Login from "../pages/public/login";
import ForgotPassword from "../pages/public/forgot_pass";

import Dashboard from "../pages/private/dash_board";
import Overview from "../pages/private/dash_board/Overview";
import Sales from "../pages/private/dash_board/Sales";

import Stock from "../pages/private/stock";
import DefaultStock from "../pages/private/stock/Default";

import PartEntry from "../pages/private/part_entry";
import DefaultPartEntry from "../pages/private/part_entry/Default";
import AddPart from "../pages/private/part_entry/actions/add_part";
import EditPart from "../pages/private/part_entry/actions/edit_part";
import PurchaseHistory from "../pages/private/part_entry/actions/purchase_history";
import IssueHistory from "../pages/private/part_entry/actions/issue_history";
import PurchasePart from "../pages/private/part_entry/actions/purchase_part";

import Jobs from "../pages/private/jobs";
import DefaultJobsList from "../pages/private/jobs/Default";
import OpenJob from "../pages/private/jobs/actions/open_job";

import PartIssue from "../pages/private/part_issue";
import DefaultPartIssue from "../pages/private/part_issue/Default";

import HangarUse from "../pages/private/hangar_use";
import DefaultHangarUse from "../pages/private/hangar_use/Default";

function AppRoutes() {
  const { isAuth } = useContext(AuthContext);

  return (
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
        <Route path="default/issue-history/:partId" element={<IssueHistory />} />
        <Route path="default/purchase-part/:partId" element={<PurchasePart />} />
      </Route>
      <Route path="jobs" element={<PrivateRoute isAuth={isAuth}> <Jobs /> </PrivateRoute>} >
        <Route path="jobs-list" element={<DefaultJobsList />} />
        <Route path="open-job" element={<OpenJob />} />
      </Route>
      <Route path="part-issue" element={<PrivateRoute isAuth={isAuth}> <PartIssue /> </PrivateRoute>} >
        <Route path="default" element={<DefaultPartIssue />} />
      </Route>
      <Route path="hangar-use" element={<PrivateRoute isAuth={isAuth}> <HangarUse /> </PrivateRoute>} >
        <Route path="default" element={<DefaultHangarUse />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
