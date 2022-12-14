import { lazy } from "react";

export const Profile = lazy(() => import("../../pages/private/profile"));
export const Overview = lazy(() => import("../../pages/private/profile/overview"));
export const Details = lazy(() => import("../../pages/private/profile/details"));
export const Picture = lazy(() => import("../../pages/private/profile/picture"));
export const Security = lazy(() => import("../../pages/private/profile/security"));