import { useContext } from "react";
import CardLabels from "./cardLabels";
import { Card, CardContent, CardHeader } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

function CompanyBilling(props) {
    const { theme } = useContext(ThemeContext);

    const cardStyles = {
        elavation: 0,
        borderRadius: "0px",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
    };
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

    return (
        <Card {...defaultProps} >
            <CardHeader title="Company billing" sx={headerStyles} titleTypographyProps={titleTypoProps} />
            <CardContent sx={{ pl: 0, pr: 0 }}>
                <CardLabels />
            </CardContent>
        </Card>
    );
};
export default CompanyBilling;
