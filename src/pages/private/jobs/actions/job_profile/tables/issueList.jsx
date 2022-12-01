import { useContext } from "react";
import { issuedParts } from "../../../../data/issuedParts";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PrimaryTable from "../../../../../../components/shared/Table/primary";
import ErrorBtn from "../../../../../../components/shared/FormsUI/Button/ErrorBtn";
import { CloseJobContext } from "../../../../../../context/CloseJobContextProvider";
import SearchCloseExp from "../../../../../../components/shared/Jobs/SearchCloseExp";
import SalesRecords from "../../../../../../components/shared/RecordsAndValue/SalesRecords";

const columns = [
    { value: "date_of_issue", label: "Date Issued" },
    { value: "description", label: "Description" },
    { value: "part_number", label: "Part No" },
    { value: "serial_number", label: "Serial No" },
    { value: "issued_to", label: "Issued To" },
    { value: "sp_in_foreign", label: "Unit SP", align: "center" },
    { value: "qty_issued", label: "Qty. Issued", align: "center" },
    { value: "total_price", label: "Total Price", align: "center" },
];

function IssueList(props) {
    const { item, jobId } = props;
    const { handleOpenDialog } = useContext(CloseJobContext);

    const details = issuedParts.filter((item) => item.job_id === parseInt(jobId));
    const length = details.length;

    const issuedPartsData = details?.map((item) => {
        return {
            ...item,
            issued_to: item.first_name + " " + item.last_name,
            total_price: (item.sp_in_foreign * item.qty_issued).toFixed(2),
        };
    });

    const handleCloseJob = () => {
        const status = item.job_status;
        if (status === "Opened") {
            return (
                <ErrorBtn
                    onClick={() => {
                        handleOpenDialog();
                    }}
                    sx={{ mr: 1, fontSize: "13.1px", float: { xs: "left", sm: "none" } }}
                    startIcon={<LockOutlinedIcon />}
                >
                    Close Job
                </ErrorBtn>
            );
        }
    };

    return (
        <>
            <SearchCloseExp closeJob={handleCloseJob()} />
            <PrimaryTable data={issuedPartsData} columns={columns} />
            <SalesRecords length={length} data={details} />
        </>
    );
}

export default IssueList;
