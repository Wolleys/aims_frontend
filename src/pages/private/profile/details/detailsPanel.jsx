import { useState } from "react";
import CompanyDetails from "./forms/companyDetails";
import EditCompanyDetailsForm from "./forms/editCompanyDetailsForm";

function DetailsPanel(props) {
    const [editing, setEditing] = useState(false);

    const editRow = (company) => {
        setEditing(true);
    };
    return (
        <>
            {editing ? (
                <EditCompanyDetailsForm setEditing={setEditing} />
            ) : (
                <CompanyDetails editRow={editRow} />
            )}
        </>
    );
};
export default DetailsPanel;
