import { lazy } from "react";

export const HangarUse = lazy(() => import("../../../pages/private/hangar_use"));
export const DefaultHangarUse = lazy(() => import("../../../pages/private/hangar_use/Default"));
export const IssuePart = lazy(() => import("../../../pages/private/hangar_use/actions/default/issue_part"));
export const EditIssuedPart = lazy(() => import("../../../pages/private/hangar_use/actions/default/edit_issue"));