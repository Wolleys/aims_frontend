import { useState } from "react";
import JobDetails from "./jobDetails";
import EditJobForm from "./editJobForm";
import { useParams } from "react-router-dom";

function EditJob() {
    const { jobId } = useParams();
    const [editing, setEditing] = useState(false);

    const editRow = (part) => {
        setEditing(true);
    };

    return (
        <>
            {editing ? (
                <EditJobForm setEditing={setEditing} />
            ) : (
                <JobDetails jobId={jobId} editRow={editRow} />
            )}
        </>
    );
}

export default EditJob;
