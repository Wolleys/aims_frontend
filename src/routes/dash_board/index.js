import { lazy } from "react";

export const Dashboard = lazy(() => import("../../pages/private/dash_board"));
export const Overview = lazy(() => import("../../pages/private/dash_board/Overview"));
export const Sales = lazy(() => import("../../pages/private/dash_board/Sales"));