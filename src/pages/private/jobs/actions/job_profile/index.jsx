import { useParams } from "react-router-dom";

function JobProfile() {
    const { jobId } = useParams();
    return <h1>Job Profile - {jobId} </h1>;
}

export default JobProfile;
