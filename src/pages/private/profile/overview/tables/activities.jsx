import dayjs from "dayjs";
import { activities } from "../../../data/activities";
import PrimaryTable from "../../../../../components/shared/Table/primary";

const columns = [
    { value: "date", label: "Date" },
    { value: "action", label: "Action" },
    { value: "description", label: "Description" },
    { value: "type", label: "Type", align: "center" },
];

const tableStyle = {
    borderRadius: 0,
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
}

function Activities() {
    const activitiesData = activities?.map((item) => {
        return {
            ...item,
            date: dayjs(item.date).format("DD-MMM-YYYY"),
        };
    });
    return <PrimaryTable data={activitiesData} columns={columns} sx={tableStyle} />;
}

export default Activities;
