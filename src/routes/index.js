import { Suspense } from "react";
import PrivateRoute from "./PrivateRoute";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/shared/Loader";

import * as Auth from "./auth";
import * as Dashboard from "./dash_board";
import * as Stock from "./stock/default";
import * as Part from "./part_entry/default";
import * as Jobs from "./jobs";
import * as PartIssue from "./part_issue/default";
import * as HangarUse from "./hangar_use/default";
import * as Profile from "./profile";
import * as Settings from "./account_settings";
import { NotFound } from "./not_found";

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Auth.Login />} />
        <Route path="forgot-password" element={<Auth.ForgotPassword />} />
        <Route path="dashboard" element={<PrivateRoute> <Dashboard.Dashboard /> </PrivateRoute>}>
          <Route path="overview" element={<Dashboard.Overview />} />
          <Route path="sales" element={<Dashboard.Sales />} />
        </Route>
        <Route path="stock" element={<PrivateRoute> <Stock.Stock /> </PrivateRoute>} >
          <Route path="default" element={<Stock.DefaultStock />} />
        </Route>
        <Route path="part-entry" element={<PrivateRoute> <Part.PartEntry /> </PrivateRoute>} >
          <Route path="default" element={<Part.DefaultPartEntry />} />
          <Route path="default/add-part" element={<Part.AddPart />} />
          <Route path="default/edit-part/:partId" element={<Part.EditPart />} />
          <Route path="default/purchase-part/:partId" element={<Part.PurchasePart />} />
          <Route path="default/purchase-history/:partId" element={<Part.PurchaseHistory />} />
          <Route path="default/purchase-history/edit-part/:partId" element={<Part.EditPurchase />} />
          <Route path="default/issue-history/:partId" element={<Part.IssueHistory />} />
        </Route>
        <Route path="jobs" element={<PrivateRoute> <Jobs.Jobs /> </PrivateRoute>} >
          <Route path="jobs-list" element={<Jobs.DefaultJobsList />} />
          <Route path="open-job" element={<Jobs.OpenJob />} />
          <Route path="edit-job/:jobId" element={<Jobs.EditJob />} />
          <Route path="job-profile/:jobId" element={<Jobs.JobProfile />} />
        </Route>
        <Route path="part-issue" element={<PrivateRoute> <PartIssue.PartIssue /> </PrivateRoute>} >
          <Route path="default" element={<PartIssue.DefaultPartIssue />} />
        </Route>
        <Route path="hangar-use" element={<PrivateRoute> <HangarUse.HangarUse /> </PrivateRoute>} >
          <Route path="default" element={<HangarUse.DefaultHangarUse />} />
          <Route path="default/issue-part" element={<HangarUse.IssuePart />} />
          <Route path="default/edit-issue/:partId" element={<HangarUse.EditIssuedPart />} />
        </Route>
        <Route path="profile" element={<PrivateRoute> <Profile.Profile /> </PrivateRoute>}>
          <Route path="overview" element={<Profile.Overview />} />
          <Route path="details" element={<Profile.Details />} />
          <Route path="picture" element={<Profile.Picture />} />
          <Route path="security" element={<Profile.Security />} />
        </Route>
        <Route path="settings" element={<PrivateRoute> <Settings.Settings /> </PrivateRoute>}>
          <Route path="billing" element={<Settings.Billing />} />
          <Route path="billing/billing_information" element={<Settings.BillingInfo />} />
          <Route path="billing/payment_method" element={<Settings.PaymentMethod />} />
        
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
