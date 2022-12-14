import { lazy } from "react";

export const Profile = lazy(() => import("../../pages/private/profile"));
export const Overview = lazy(() => import("../../pages/private/profile/Overview"));
export const Details = lazy(() => import("../../pages/private/profile/Details"));
export const Picture = lazy(() => import("../../pages/private/profile/Picture"));