import { useParams } from "react-router-dom";
import PartPurchaseHistory from "./tables/partPurchaseHistory";

function PurchaseHistory() {
    const { partId } = useParams();
    return (
        <PartPurchaseHistory partId={partId} />
    );
}

export default PurchaseHistory;
