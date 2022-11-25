import { useParams } from "react-router-dom";
import NewPurchaseForm from "./newPurchaseForm";

function PurchasePart() {
    const { partId } = useParams();
    return (
        <>
            <NewPurchaseForm partId={partId} />
        </>
    );
}

export default PurchasePart;
