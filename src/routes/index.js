import { Suspense } from "react";
import PrivateRoute from "./PrivateRoute";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/shared/Loader";

import { Login, ForgotPassword } from "./auth";
import { Dashboard, Overview, Sales } from "./dash_board";
import { Stock, DefaultStock } from "./stock/default";
import {
  PartEntry, DefaultPartEntry, AddPart, EditPart, PurchaseHistory, NewPurchase,
  EditPurchase, IssueHistory, PurchasePart
} from "./part_entry/default";

import { Jobs, DefaultJobsList, OpenJob, EditJob, JobProfile } from "./jobs";
import { PartIssue, DefaultPartIssue } from "./part_issue/default";
import { HangarUse, DefaultHangarUse, IssuePart, EditIssuedPart } from "./hangar_use/default";
import * as Profile from "./profile";
import { NotFound } from "./not_found";

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}>
          <Route path="overview" element={<Overview />} />
          <Route path="sales" element={<Sales />} />
        </Route>
        <Route path="stock" element={<PrivateRoute> <Stock /> </PrivateRoute>} >
          <Route path="default" element={<DefaultStock />} />
        </Route>
        <Route path="part-entry" element={<PrivateRoute> <PartEntry /> </PrivateRoute>} >
          <Route path="default" element={<DefaultPartEntry />} />
          <Route path="default/add-part" element={<AddPart />} />
          <Route path="default/edit-part/:partId" element={<EditPart />} />
          <Route path="default/purchase-history/:partId" element={<PurchaseHistory />} />
          <Route path="default/purchase-history/new-purchase" element={<NewPurchase />} />
          <Route path="default/purchase-history/edit-part/:partId" element={<EditPurchase />} />
          <Route path="default/issue-history/:partId" element={<IssueHistory />} />
          <Route path="default/purchase-part/:partId" element={<PurchasePart />} />
        </Route>
        <Route path="jobs" element={<PrivateRoute> <Jobs /> </PrivateRoute>} >
          <Route path="jobs-list" element={<DefaultJobsList />} />
          <Route path="open-job" element={<OpenJob />} />
          <Route path="edit-job/:jobId" element={<EditJob />} />
          <Route path="job-profile/:jobId" element={<JobProfile />} />
        </Route>
        <Route path="part-issue" element={<PrivateRoute> <PartIssue /> </PrivateRoute>} >
          <Route path="default" element={<DefaultPartIssue />} />
        </Route>
        <Route path="hangar-use" element={<PrivateRoute> <HangarUse /> </PrivateRoute>} >
          <Route path="default" element={<DefaultHangarUse />} />
          <Route path="default/issue-part" element={<IssuePart />} />
          <Route path="default/edit-issue/:partId" element={<EditIssuedPart />} />
        </Route>
        <Route path="profile" element={<PrivateRoute> <Profile.Profile /> </PrivateRoute>}>
          <Route path="overview" element={<Profile.Overview />} />
          <Route path="details" element={<Profile.Details />} />
          <Route path="picture" element={<Profile.Picture />} />
          <Route path="security" element={<Profile.Security />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
