import { useParams } from "react-router-dom";

function EditJob() {
    const { jobId } = useParams();
    return <h1>Edit Job - {jobId} </h1>;
}

export default EditJob;
