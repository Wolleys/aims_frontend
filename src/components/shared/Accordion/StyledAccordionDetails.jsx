import { useContext } from "react";
import { styled } from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function StyledAccordionDetails({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const AccordionDetails = styled(MuiAccordionDetails)(() => ({
        padding: 2,
        backgroundColor: theme === "light" ? "#fafafa" : "#0d1117",
        borderTop: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    }));

    return <AccordionDetails { ...props } />;
}

export default StyledAccordionDetails;
