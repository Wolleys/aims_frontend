import { Link } from "react-router-dom";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { Grid, Box, List, ListItem, ListItemText, ListItemIcon, Typography } from "@mui/material";

function FeaturesList({ theme }) {
    const planFeatures = [
        { name: "users", label: "1 user included" },
        { name: "engineers", label: "1 engineer included" },
        { name: "reporting", label: "Basic reporting" },
        { name: "ware_house", label: "1 additional warehouses included" },
        { name: "storage", label: "Unlimited storage" },
    ];

    const premiumFeatures = [
        { name: "users", label: "Unlimited users included" },
        { name: "engineers", label: "Unlimited engineers included" },
        { name: "reporting", label: "Advanced reporting and analytics" },
        { name: "ware_house", label: "9 additional warehouses included" },
        { name: "support", label: "Standard support" },
    ];

    const boxStyle = {
        padding: "8px 16px"
    }

    const checkIconStyle = {
        color: theme === "light" ? "#27ab6e" : "#3fb950",
    }
    const clearIconStyle = {
        color: theme === "light" ? "#cf222e" : "#f85149",
    }
    const primaryTypotextStyle = {
        fontWeight: 400,
        fontSize: "14px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }
    const typoStyle = {
        fontSize: 14,
        fontWeight: "600",
        color: theme === "light" ? "#57606a" : "#8b949e",
    }
    const linkStyle = {
        fontSize: 13,
        textDecoration: "none",
        color: theme === "light" ? "#0969da" : "#58a6ff",
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Box style={boxStyle}>
                    <List disablePadding>
                        {planFeatures.map((item) => (
                            <ListItem key={item.name} style={{ padding: "0px" }}>
                                <ListItemIcon>
                                    <CheckOutlinedIcon style={checkIconStyle} fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item.label} primaryTypographyProps={primaryTypotextStyle}
                                    style={{ marginLeft: "-28px" }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box style={boxStyle}>
                    <Typography sx={typoStyle}> Not included: </Typography>
                    <List disablePadding>
                        {premiumFeatures.map((item) => (
                            <ListItem key={item.name} style={{ padding: "0px" }}>
                                <ListItemIcon>
                                    <ClearOutlinedIcon style={clearIconStyle} fontSize="small" />
                                </ListItemIcon>
                                <ListItemText primary={item.label} primaryTypographyProps={primaryTypotextStyle}
                                    style={{ marginLeft: "-28px" }} />
                            </ListItem>
                        ))}
                    </List>
                    <Link style={linkStyle} to="/settings/billing/plans">
                        See all features and compare plans
                    </Link>
                </Box>
            </Grid>
        </Grid>
    )
}

export default FeaturesList;
