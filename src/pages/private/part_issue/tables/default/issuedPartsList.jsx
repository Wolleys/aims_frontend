import { useContext } from "react";
import { issuedParts } from "../../../data/issuedParts";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PrimaryTable from "../../../../../components/shared/Table/primary";
import EditDel from "../../../../../components/shared/ActionMenu/EditDel";
import ErrorBtn from "../../../../../components/shared/FormsUI/Button/ErrorBtn";
import { CloseJobContext } from "../../../../../context/CloseJobContextProvider";
import { SelectedJobContext } from "../../../../../context/SelectedJobContextProvider";
import RecordsCloseExp from "../../../../../components/shared/PartIssue/RecordsCloseExp";

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

export default function IssuedPartsList(props) {
    const { selectedJob } = useContext(SelectedJobContext);
    const { handleOpenDialog } = useContext(CloseJobContext);
    const jobId = selectedJob.id;
    const details = issuedParts.filter((item) => item.job_id === jobId);
    const length = details.length;

    const issuedPartsData = details?.map((item) => {
        return {
            ...item,
            issued_to: item.first_name + " " + item.last_name,
            total_price: (item.sp_in_foreign * item.qty_issued).toFixed(2),
            actions: <EditDel row={item} />,
        };
    });

    const handleCloseJob = () => {
        const status = selectedJob.job_status;
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
            <PrimaryTable data={issuedPartsData} columns={columns} />
            <RecordsCloseExp
                length={length}
                closeJob={handleCloseJob()}
                details={details}
            />
        </>
    );
}
