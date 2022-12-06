import { useContext } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { ThemeContext } from "../../../context/ThemeContextProvider";

function PartDetails(props) {
    const { part } = props;
    const { theme } = useContext(ThemeContext);

    const desktopTypoStyle = {
        mb: 0.5,
        fontWeight: 600,
        fontSize: "14px",
        justifyContent: "center",
        display: { xs: "none", sm: "flex" },
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    };

    const mobileTypoStyle = {
        fontWeight: 600,
        fontSize: "14px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    };

    const descSpanStyle = {
        fontWeight: 500,
        fontSize: "14px",
        margin: "0 40px 0 0",
        color: theme === "light" ? "#57606a" : "#8b949e",
    };

    const spanStyle = {
        fontWeight: 500,
        fontSize: "14px",
        color: theme === "light" ? "#57606a" : "#8b949e",
    };

    return (
        <Grid container>
            {part?.map((row) => (
                <Grid item key={row.id} xs={12} sm={12} md={12}>
                    <Box
                        sx={{
                            display: { xs: "grid", sm: "none", md: "none" },
                            mt: 0.5,
                            mb: 1,
                        }}
                    >
                        <Typography sx={mobileTypoStyle}>
                            Description: {""}
                            <span style={spanStyle}>{row.description}</span>
                        </Typography>
                        <Typography sx={mobileTypoStyle}>
                            Part No: {""}
                            <span style={spanStyle}>{row.part_number}</span>
                        </Typography>
                    </Box>

                    <Typography gutterBottom sx={desktopTypoStyle}>
                        Description:
                        <span style={descSpanStyle}>{row.description}</span>
                        Part No:
                        <span style={spanStyle}>{row.part_number}</span>
                    </Typography>
                </Grid>
            ))}
        </Grid>
    );
}

export default PartDetails;
