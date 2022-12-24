import { useContext, useState } from "react";
import CompanyDetails from "./companyDetails";
import BillingInfoForm from "./billingInfoForm";
import { Card, CardContent, CardHeader } from "@mui/material";
import { ThemeContext } from "../../../../../context/ThemeContextProvider";

function BillingInfo(props) {
    const { theme } = useContext(ThemeContext);
    const [editing, setEditing] = useState(false);

    const editRow = (company) => {
        setEditing(true);
    };

    const cardStyles = {
        elavation: 0,
        borderRadius: "0px",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
    }
    const defaultProps = {
        sx: cardStyles,
        variant: "none",
    }
    const headerStyles = {
        p: 0, pt: 1, pb: 0.7,
        borderBottom: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    }
    const titleTypoProps = {
        lineHeight: 1.5,
        fontSize: "20px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }
    const cardContentStyles = {
        borderRadius: "4px",
        pl: 0, pr: 0, pt: 0, mt: 2,
        "&.MuiCardContent-root:last-child": {
            paddingBottom: 0
        }
    }

    return (
        <Card {...defaultProps} >
            <CardHeader title="Billing information"
                sx={headerStyles}
                titleTypographyProps={titleTypoProps}
            />
            <CardContent sx={cardContentStyles}>
                {editing ?
                    <BillingInfoForm setEditing={setEditing} />
                    : <CompanyDetails editRow={editRow} />}
            </CardContent>
        </Card>
    );
};
export default BillingInfo;
