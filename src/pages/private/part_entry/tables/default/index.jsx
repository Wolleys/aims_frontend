import { parts } from "../../../data/parts";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ActionMenu from "../../components/actionMenu";
import PrimaryTable from "../../../../../components/shared/Table/primary";
import PrimarySearchBar from "../../../../../components/shared/SearchBar/primary";

const columns = [
    { value: "description", label: "Description" },
    { value: "part_number", label: "Part Number" },
    { value: "location", label: "Location" },
    { value: "starting_quantity", label: "Initial Qty.", align: "center" },
    { value: "quantity_received", label: "Qty. Added", align: "center" },
    { value: "quantity_issued", label: "Qty. Issued", align: "center" },
    { value: "quantity_on_hand", label: "Qty. In Stock", align: "center" },
    { value: "reorder_level", label: "Reorder Level", align: "center" },
    {
        value: "actions",
        label: "Actions",
        align: "center",
        style: { padding: "1px" },
    },
];

const partsData = parts?.map((item) => {
    return {
        ...item,
        actions: <ActionMenu row={item} />,
    };
});

export default function DefaultStore() {
    const navigate = useNavigate();
    const addPart = () => {
        navigate("/part-entry/default/add-part");
    };

    return (
        <>
            <PrimarySearchBar
                action
                icon={<AddIcon />}
                label="Add Part"
                navigate={addPart}
            />
            <PrimaryTable data={partsData} columns={columns} />
        </>
    );
}
