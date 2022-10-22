import { useContext } from "react";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/public/not_found";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

import Login from "../pages/public/login";
import Dashboard from "../pages/private/dash_board";
import Overview from "../pages/private/dash_board/Overview";
import Sales from "../pages/private/dash_board/Sales";

import Stock from "../pages/private/stock";
import DefaultStock from "../pages/private/stock/Default";

import PartEntry from "../pages/private/part_entry";
import DefaultPartEntry from "../pages/private/part_entry/Default";

import Jobs from "../pages/private/jobs";
import PartIssue from "../pages/private/part_issue";
import DefaultPartIssue from "../pages/private/part_issue/Default";

import HangarUse from "../pages/private/hangar_use";
import DefaultHangarUse from "../pages/private/hangar_use/Default";

function AppRoutes() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<PrivateRoute isAuth={isAuth}> <Dashboard /> </PrivateRoute>}>
        <Route path="overview" element={<Overview />} />
        <Route path="sales" element={<Sales />} />
      </Route>
      <Route path="stock" element={<PrivateRoute isAuth={isAuth}> <Stock /> </PrivateRoute>} >
        <Route path="default" element={<DefaultStock />} />
      </Route>
      <Route path="parts-entry" element={<PrivateRoute isAuth={isAuth}> <PartEntry /> </PrivateRoute>} >
        <Route path="default" element={<DefaultPartEntry />} />
      </Route>
      <Route path="jobs" element={<PrivateRoute isAuth={isAuth}> <Jobs /> </PrivateRoute>} />
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
