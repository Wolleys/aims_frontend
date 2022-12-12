import { useContext } from "react";
import Copyright from "../Copyright";
import { essentialFeatures } from "./essentialFeatures";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

function Features() {
    const { theme } = useContext(ThemeContext);

    const headingTypoStyle = {
        mb: 0,
        fontWeight: 600,
        lineHeight: 1.5,
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }
    const subHeadingTypoStyle = {
        fontWeight: 400,
        lineHeight: 1.6,
        fontSize: "14px",
        color: theme === "light" ? "#57606a" : "#8b949e",
    }
    const iconStyle = {
        color: theme === "light" ? "#27ab6e" : "#3fb950",
    }
    const primaryTypotextStyle = {
        fontWeight: 400,
        fontSize: "14px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }
    const dividerStyle = {
        mb: 2,
        mt: 4,
        borderBottom: theme === "light" ? "1px solid #d8dee4" : "1px solid #21262d",
    };
    return (
        <>
            <Box sx={{ mt: 17 }}>
                <Typography variant="h5" sx={headingTypoStyle} >
                    AIMS - Features Dashboard
                </Typography>
            </Box>
            <Box>
                <Typography variant="subtitle2" sx={subHeadingTypoStyle}>
                    Manage all your aviation inventory with ease - anywhere, anytime.
                </Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
                <List disablePadding>
                    {essentialFeatures.map((item) => (
                        <ListItem key={item.name} style={{ padding: "0px" }}>
                            <ListItemIcon>
                                <CheckCircleIcon style={iconStyle} fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item.label} primaryTypographyProps={primaryTypotextStyle}
                                style={{ marginLeft: "-28px" }} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Divider sx={dividerStyle} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Copyright />
            </Box>
        </>
    );
}

export default Features;