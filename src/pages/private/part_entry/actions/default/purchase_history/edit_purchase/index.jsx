import { useState } from "react";
import { useParams } from "react-router-dom";
import PurchaseDetails from "./purchaseDetails";
import EditPurchaseForm from "./editPurchaseForm";

function EditPurchase() {
    const { partId } = useParams();
    const [editing, setEditing] = useState(false);

    const editRow = (part) => {
        setEditing(true);
    };

    return (
        <>
            {editing ? (
                <EditPurchaseForm setEditing={setEditing} />
            ) : (
                <PurchaseDetails partId={partId} editRow={editRow} />
            )}
        </>
    );
}

export default EditPurchase;
