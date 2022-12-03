import { lazy } from "react";

export const Stock = lazy(() => import("../../../pages/private/stock"));
export const DefaultStock = lazy(() => import("../../../pages/private/stock/Default"));