import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { issuedParts } from "../../../data/issuedParts";
import PrimaryTable from "../../../../../components/shared/Table/primary";
import EditDel from "../../../../../components/shared/ActionMenu/EditDel";
import PrimarySearchBar from "../../../../../components/shared/SearchBar/Primary";
import SalesRecords from "../../../../../components/shared/RecordsAndValue/StockRecords";

const columns = [
    { value: "date_of_issue", label: "Date Issued" },
    { value: "description", label: "Description" },
    { value: "part_number", label: "Part No" },
    { value: "serial_number", label: "Serial No" },
    { value: "issued_to", label: "Issued To" },
    { value: "sp_in_foreign", label: "Unit SP", align: "center" },
    { value: "qty_issued", label: "Qty. Issued", align: "center" },
    { value: "total_price", label: "Total Price", align: "center" },
    {
        value: "actions",
        label: "Actions",
        align: "center",
        style: { padding: "1px" },
    },
];

const DefaultStore = () => {
    const navigate = useNavigate();
    const issuePart = () => {
        navigate("/hangar-use/default/issue-part");
    };

    const handleEdit = (row) => navigate(`/hangar-use/default/edit-issue/${row}`);

    const length = issuedParts.length;
    const issuedPartsData = issuedParts?.map((item) => {
        return {
            ...item,
            issued_to: item.first_name + " " + item.last_name,
            total_price: (item.sp_in_foreign * item.qty_issued).toFixed(2),
            actions: <EditDel row={item} action navigate={handleEdit} />,
        };
    });

    return (
        <>
            <PrimarySearchBar
                action
                icon={<AddIcon />}
                label="New Issue"
                navigate={issuePart}
            />
            <PrimaryTable data={issuedPartsData} columns={columns} />
            <SalesRecords length={length} data={issuedPartsData} />
        </>
    );
};

export default DefaultStore;
