import { lazy } from "react";

export const Jobs = lazy(() => import("../../pages/private/jobs"));
export const DefaultJobsList = lazy(() => import("../../pages/private/jobs/Default"));
export const OpenJob = lazy(() => import("../../pages/private/jobs/actions/open_job"));
export const EditJob = lazy(() => import("../../pages/private/jobs/actions/edit_job"));
export const JobProfile = lazy(() => import("../../pages/private/jobs/actions/job_profile"));