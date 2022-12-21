import { lazy } from "react";

export const Settings = lazy(() => import("../../pages/private/account_settings"));
export const Billing = lazy(() => import("../../pages/private/account_settings/billing"));