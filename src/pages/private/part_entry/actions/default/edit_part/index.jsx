import PartDetails from "./partDetails";
import { useParams } from "react-router-dom";

function EditPart() {
    const { partId } = useParams();
    return (
        <>
            <PartDetails partId={partId} />
        </>

    );
}

export default EditPart;
