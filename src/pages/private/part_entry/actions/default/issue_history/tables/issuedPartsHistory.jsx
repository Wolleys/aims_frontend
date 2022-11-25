import { parts } from "../../../../../data/parts";
import { issuedPartsHistory } from "../../../../../data/issuedPartsHistory";
import PrimaryTable from "../../../../../../../components/shared/Table/primary";
import PartDetails from "../../../../../../../components/shared/PartEntry/PartDetails";
import PrimarySearchBar from "../../../../../../../components/shared/SearchBar/Primary";
import RecordsAndTotal from "../../../../../../../components/shared/PartEntry/RecordsAndTotal";

const columns = [
    { value: "date_of_issue", label: "Date Issued" },
    { value: "job_number", label: "Job Number" },
    { value: "issued_to", label: "Issued To" },
    { value: "qty_issued", label: "Quantity Issued", align: "center" },
    { value: "qty_remaining", label: "Quantity Remaining", align: "center" },
    { value: "sp_in_foreign", label: "Unit SP", align: "center" },
    { value: "total_price", label: "Total Price", align: "center" },
];

const historyData = issuedPartsHistory?.map((item) => {
    return {
        ...item,
        issued_to: item.first_name + " " + item.last_name,
        total_price: (item.sp_in_foreign * item.qty_issued).toFixed(2),
    };
});

function IssuedPartsHistory(props) {
    const { partId } = props;
    const length = issuedPartsHistory.length;
    const partDetails = parts?.filter((item) => item.id === parseInt(partId));

    return (
        <>
            <PrimarySearchBar />
            <PartDetails part={partDetails} />
            <PrimaryTable data={historyData} columns={columns} />
            <RecordsAndTotal length={length} history={issuedPartsHistory} />
        </>
    );
}

export default IssuedPartsHistory;
