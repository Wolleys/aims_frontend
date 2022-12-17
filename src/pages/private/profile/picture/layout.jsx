import { useContext } from "react";
import { Box, Card, Container } from "@mui/material";
import ProfilePictureForm from "./form/profilePictureForm";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

function Layout(props) {
    const { theme } = useContext(ThemeContext);

    const boxStyles = {
        // width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
    }

    const cardStyle = {
        borderRadius: "4px",
        // p: 2, pl: 15, pr: 15, mt: 6,
        p: 2, mt: 6,
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    }

    const defaultProps = {
        sx: cardStyle,
        variant: "outlined",
    }

    return (
        <>
            <Container maxWidth="sm">
                <Card {...defaultProps} >
                    <Box sx={boxStyles} >
                        <ProfilePictureForm />
                    </Box>
                </Card>
            </Container>
        </>
    );
};
export default Layout;
