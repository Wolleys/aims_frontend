import { useLocation, useParams } from "react-router-dom";

function JobsLinks(label) {
    const { jobId } = useParams();
    const { pathname } = useLocation();
    const pathLinks =
        pathname === "/jobs/jobs-list" ||
        pathname === "/jobs/open-job" ||
        pathname === `/jobs/job-profile/${jobId}` ||
        pathname === `/jobs/edit-job/${jobId}`;
    return label === "Jobs" && pathLinks;
}

export default JobsLinks;
