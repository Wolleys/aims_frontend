import { useParams } from "react-router-dom";

function EditPart() {
    const { partId } = useParams();
    return <h1>Edit Part - {partId} </h1>;
}

export default EditPart;
