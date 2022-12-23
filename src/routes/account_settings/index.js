import { lazy } from "react";

export const Settings = lazy(() => import("../../pages/private/account_settings"));
export const Billing = lazy(() => import("../../pages/private/account_settings/billing"));
export const BillingInfo = lazy(() => import("../../pages/private/account_settings/billing/billing_info"));
export const PaymentMethod = lazy(() => import("../../pages/private/account_settings/billing/payment_method"));