import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Dashboard from "../pages/dash_board";
import Tab1 from "../pages/dash_board/Tab1";
import Tab2 from "../pages/dash_board/Tab2";

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
        <Route path="tab1" element={<Tab1 />} />
        <Route path="tab2" element={<Tab2 />} />
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
