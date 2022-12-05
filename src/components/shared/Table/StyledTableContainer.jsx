import { useContext } from "react";
import { TableContainer, Paper } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

export default function StyledTableContainer({ ...props }) {
    const { theme } = useContext(ThemeContext);
    const CustomPaper = (props) => {
        return (
            <Paper
                elevation={0}
                {...props}
                style={{
                    maxHeight: 500,
                    background: "transparent",
                    border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
                }}
            />
        );
    };

    const defaultProps = {
        component: CustomPaper,
    };

    return <TableContainer {...defaultProps} {...props} />;
}
