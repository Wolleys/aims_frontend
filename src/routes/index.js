import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Dashboard from "../pages/dash_board";
import Overview from "../pages/dash_board/Overview";
import Sales from "../pages/dash_board/Sales";

import Stock from "../pages/stock";
import PartEntry from "../pages/part_entry";
import Jobs from "../pages/jobs";
import PartIssue from "../pages/part_issue";
import HangarUse from "../pages/hangar_use";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="overview" element={<Overview />} />
        <Route path="sales" element={<Sales />} />
      </Route>
      <Route path="stock" element={<Stock />} />
      <Route path="parts-entry" element={<PartEntry />} />
      <Route path="jobs" element={<Jobs />} />
      <Route path="part-issue" element={<PartIssue />} />
      <Route path="hangar-use" element={<HangarUse />} />
    </Routes>
  );
}

export default AppRoutes;
