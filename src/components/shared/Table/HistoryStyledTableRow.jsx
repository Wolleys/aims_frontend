import { useContext } from "react";
import { TableRow, styled } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

export default function CssTableCell({ ...props }) {
    const { theme } = useContext(ThemeContext);
    const HistoryStyledTableRow = styled(TableRow)(() => ({
        '&:nth-of-type(even)': {
            backgroundColor: theme === "light" ? "#f6f8fa" : "#161b22",
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return <HistoryStyledTableRow {...props} />;
}
