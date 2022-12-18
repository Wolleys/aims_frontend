import { useContext } from "react";
import { Box, Card, Container } from "@mui/material";
import ChangePasswordForm from "./form/changePasswordForm";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

function Layout() {
    const { theme } = useContext(ThemeContext);

    const boxStyles = {
        display: "flex",
        alignItems: "left",
        flexDirection: "column",
        justifyContent: "center",
    };

    const cardStyle = {
        p: 2,
        mt: 6,
        borderRadius: "4px",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        // border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    };

    const defaultProps = {
        sx: cardStyle,
        variant: "none",
    };
    return (
        <Container maxWidth="sm">
            <Card {...defaultProps} >
                <Box sx={boxStyles} >
                    <ChangePasswordForm />
                </Box>
            </Card>
        </Container>
    )
}

export default Layout;
