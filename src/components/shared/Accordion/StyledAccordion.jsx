import { useContext } from "react";
import { styled } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function StyledAccordion({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(() => ({
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
    }));

    return <Accordion { ...props } />;
}

export default StyledAccordion;
