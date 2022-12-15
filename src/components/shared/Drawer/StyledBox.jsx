import { useContext } from "react";
import { Box, styled } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function StyledBox({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const StyledBox = styled(Box)({
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        borderTop: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    });

    return <StyledBox {...props} />;
}

export default StyledBox;
