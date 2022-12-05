import { useContext } from "react";
import { TableCell, tableCellClasses, styled } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

export default function CssTableCell({ ...props }) {
    const { theme } = useContext(ThemeContext);
    const StyledTableCell = styled(TableCell)(() => ({
        [`&.${tableCellClasses.head}`]: {
            fontSize: 14,
            paddingTop: "8px",
            paddingBottom: "8px",
            fontWeight: 500,
            cursor: "default",
            color: theme === "light" ? "#24292f" : "#c9d1d9",
            backgroundColor: theme === "light" ? "#f6f8fa" : "#161b22",
            borderBottom: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            color: theme === "light" ? "#57606a" : "#8b949e",
            borderBottom: theme === "light" ? "1px solid #d8dee4" : "1px solid #21262d",
        },
    }));
    
    return <StyledTableCell {...props} />;
}
