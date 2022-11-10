import { useParams } from "react-router-dom";

function EditIssuedPart() {
    const { partId } = useParams();
    return <h1>Edit Issued Part - {partId} </h1>;
}

export default EditIssuedPart;
