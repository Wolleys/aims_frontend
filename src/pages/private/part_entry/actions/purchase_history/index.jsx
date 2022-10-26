import { useParams } from "react-router-dom";

function PurchaseHistory() {
    const { partId } = useParams();
    return <h1>Purchase History For - {partId} </h1>;
}

export default PurchaseHistory;
