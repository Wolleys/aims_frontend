import { useContext } from "react";
import { Box, Card, Container } from "@mui/material";
import ProfilePictureForm from "./form/profilePictureForm";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

function Layout(props) {
    const { theme } = useContext(ThemeContext);

    const boxStyles = {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    }

    const cardStyle = {
        p: 2, mt: 6,
        borderRadius: "4px",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    }

    const defaultProps = {
        sx: cardStyle,
        variant: "none",
    }

    return (
        <Container maxWidth="sm">
            <Card {...defaultProps} >
                <Box sx={boxStyles} >
                    <ProfilePictureForm />
                </Box>
            </Card>
        </Container>
    );
};
export default Layout;
