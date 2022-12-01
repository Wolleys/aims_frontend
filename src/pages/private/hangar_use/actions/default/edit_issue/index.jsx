import { useState } from "react";
import PartDetails from "./partDetails";
import EditPartForm from "./editPartForm";
import { useParams } from "react-router-dom";

function EditIssuedPart() {
    const { partId } = useParams();
    const [editing, setEditing] = useState(false);

    const editRow = (part) => {
        setEditing(true);
    };
    return (
        <>
            {editing ? (
                <EditPartForm setEditing={setEditing} />
            ) : (
                <PartDetails partId={partId} editRow={editRow} />
            )}
        </>
    );
}

export default EditIssuedPart;
