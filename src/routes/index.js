import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login";
import Dashboard from "../pages/dash_board";
import Overview from "../pages/dash_board/Overview";
import Sales from "../pages/dash_board/Sales";

import Stock from "../pages/stock";
import DefaultStock from "../pages/stock/Default";

import PartEntry from "../pages/part_entry";
import DefaultPartEntry from "../pages/part_entry/Default";

import Jobs from "../pages/jobs";
import PartIssue from "../pages/part_issue";
import DefaultPartIssue from "../pages/part_issue/Default";

import HangarUse from "../pages/hangar_use";
import DefaultHangarUse from "../pages/hangar_use/Default";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="overview" element={<Overview />} />
        <Route path="sales" element={<Sales />} />
      </Route>
      <Route path="stock" element={<Stock />} >
        <Route path="default" element={<DefaultStock />} />
      </Route>
      <Route path="parts-entry" element={<PartEntry />} >
        <Route path="default" element={<DefaultPartEntry />} />
      </Route>
      <Route path="jobs" element={<Jobs />} />
      <Route path="part-issue" element={<PartIssue />} >
        <Route path="default" element={<DefaultPartIssue />} />
      </Route>
      <Route path="hangar-use" element={<HangarUse />} >
        <Route path="default" element={<DefaultHangarUse />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
