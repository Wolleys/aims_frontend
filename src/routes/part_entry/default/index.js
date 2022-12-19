import { lazy } from "react";

export const PartEntry = lazy(() => import("../../../pages/private/part_entry"));
export const DefaultPartEntry = lazy(() => import("../../../pages/private/part_entry/Default"));
export const AddPart = lazy(() => import("../../../pages/private/part_entry/actions/default/add_part"));
export const EditPart = lazy(() => import("../../../pages/private/part_entry/actions/default/edit_part"));
export const PurchasePart = lazy(() => import("../../../pages/private/part_entry/actions/default/purchase_part"));
export const PurchaseHistory = lazy(() => import("../../../pages/private/part_entry/actions/default/purchase_history"));
export const EditPurchase = lazy(() => import("../../../pages/private/part_entry/actions/default/purchase_history/edit_purchase"));
export const IssueHistory = lazy(() => import("../../../pages/private/part_entry/actions/default/issue_history"));