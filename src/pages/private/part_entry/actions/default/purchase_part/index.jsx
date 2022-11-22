import { useParams } from "react-router-dom";

function PurchasePart() {
    const { partId } = useParams();
    return <h1>Purchase Part For - {partId} </h1>;
}

export default PurchasePart;
