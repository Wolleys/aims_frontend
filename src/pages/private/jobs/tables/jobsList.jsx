import dayjs from "dayjs";
import { jobs } from "../../data/jobs";
import { useNavigate } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PrimaryTable from "../../../../components/shared/Table/primary";
import MoreEditDel from "../../../../components/shared/ActionMenu/MoreEditDel";
import PrimarySearchBar from "../../../../components/shared/SearchBar/Primary";

const columns = [
    { value: "date_opened", label: "Date Opened" },
    { value: "job_number", label: "Job Number" },
    { value: "aircraft_reg", label: "Aircraft Registration" },
    { value: "aircraft_type", label: "Aircraft Type" },
    { value: "job_status", label: "Job Status" },
    {
        value: "actions",
        label: "Actions",
        align: "center",
        style: { padding: "1px" },
    },
];

export default function JobsList() {
    const navigate = useNavigate();

    //Links
    const openJob = () => navigate("/jobs/open-job");
    const handleView = (row) => navigate(`/jobs/job-profile/${row.id}`);
    const handleEdit = (row) => navigate(`/jobs/edit-job/${row.id}`);

    const jobsData = jobs?.map((item) => {
        return {
            ...item,
            date_opened: dayjs(item.date_opened).format("DD-MMM-YYYY"),
            actions: (
                <MoreEditDel
                    row={item}
                    handleView={handleView}
                    handleEdit={handleEdit}
                />
            ),
        };
    });

    return (
        <>
            <PrimarySearchBar
                action
                icon={<LockOpenIcon />}
                label="Open Job"
                navigate={openJob}
            />
            <PrimaryTable data={jobsData} columns={columns} />
        </>
    );
}
