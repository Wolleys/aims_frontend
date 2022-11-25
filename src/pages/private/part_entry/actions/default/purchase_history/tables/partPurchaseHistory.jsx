import { useNavigate } from "react-router-dom";
import { parts } from "../../../../../data/parts";
import { history } from "../../../../../data/history";
import EditDel from "../../../../../../../components/shared/ActionMenu/EditDel";
import PrimaryTable from "../../../../../../../components/shared/Table/primary";
import PartDetails from "../../../../../../../components/shared/PartEntry/PartDetails";
import RecordsExport from "../../../../../../../components/shared/PartEntry/RecordsExport";
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

function PartPurchaseHistory(props) {
    const { partId } = props;
    const navigate = useNavigate();
    const handleEdit = (row) => navigate(`/part-entry/default/purchase-history/edit-part/${row}`);

    const length = history.length;
    const partDetails = parts?.filter((item) => item.id === parseInt(partId));

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
            <PartDetails part={partDetails} />
            <PrimaryTable data={historyData} columns={columns} />
            <RecordsExport length={length} history={history} />
        </>

    )
}

export default PartPurchaseHistory