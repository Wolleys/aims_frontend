import { lazy } from "react";

export const Account = lazy(() => import("../../pages/private/account_settings/account"));
export const Upgrade = lazy(() => import("../../pages/private/account_settings/account/upgrade"));
export const PaymentHistory = lazy(() => import("../../pages/private/account_settings/account/payment_history"));