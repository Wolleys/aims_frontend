import { useNavigate } from "react-router-dom";
import { history } from "../../../../../data/history";
import EditDel from "../../../../../../../components/shared/ActionMenu/EditDel";
import PrimaryTable from "../../../../../../../components/shared/Table/primary";
import SearchAddFilter from "../../../../../../../components/shared/PartEntry/SearchAddFilter";

const columns = [
    { value: "date", label: "Purchase Date" },
    { value: "company_name", label: "Supllier" },
    { value: "quantity_received", label: "Received" },
    { value: "shelf_life", label: "Shelf life" },
    { value: "expiry_date", label: "Expiry Date" },
    { value: "bp_in_foreign", label: "Buying Price ($)", align: "center" },
    { value: "sp_in_foreign", label: "Selling Price ($)", align: "center" },
    { value: "value", label: "Value ($)", align: "center" },
    {
        value: "actions",
        label: "Actions",
        align: "center",
        style: { padding: "1px" },
    },
];

function PartPurchaseHistory() {
    const navigate = useNavigate();
    const handleEdit = (row) => navigate(`/part-entry/default/purchase-history/edit-part/${row}`);

    const historyData = history?.map((item) => {
        return {
            ...item,
            value: (item.bp_in_foreign * item.quantity_received).toFixed(2),
            actions: <EditDel row={item} action navigate={handleEdit} />,
        };
    });

    return (
        <>
            <SearchAddFilter />
            <PrimaryTable data={historyData} columns={columns} />
        </>

    )
}

export default PartPurchaseHistory