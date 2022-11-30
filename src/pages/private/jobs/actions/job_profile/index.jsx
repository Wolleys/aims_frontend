import Layout from "./layout";
import { useParams } from "react-router-dom";

function JobProfile() {
    const { jobId } = useParams();
    return (
        <Layout jobId={jobId} />
    );
}

export default JobProfile;
