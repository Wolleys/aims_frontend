import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SecondaryDivider from "../Divider/secondaryDivider";
import { AuthContext } from "../../../context/AuthContextProvider";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import {
    Card, CardContent, CardHeader, Button, Box, Avatar, Typography, List,
    ListItem, ListItemText
} from "@mui/material";

function InfoCard(props) {
    const navigate = useNavigate();
    const { header, data } = props;
    const { isAuth } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);
    const goTo = () => navigate("/settings/billing/plans");

    const cardStyle = {
        borderRadius: "4px",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    }

    const defaultProps = {
        sx: cardStyle,
        variant: "outlined",
    }

    const titleTypoProps = {
        fontSize: "16px",
        fontWeight: "600",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }

    const actionBtnStyle = {
        fontSize: "13px",
        textTransform: "none",
        ccolor: theme === "light" ? "#0969da" : "#58a6ff",
    }

    const companyTypoStyle = {
        fontSize: "14px",
        fontWeight: 500,
        margin: "20px 0 0",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }

    const planTypoStyle = {
        fontSize: "14px",
        color: theme === "light" ? "#57606a" : "#8b949e",
    }

    const nameTypoStyle = {
        fontWeight: 600,
        fontSize: "12px",
        color: theme === "light" ? "#57606a" : "#8b949e",
    }

    const detailsTypoStyle = (item) => ({
        fontWeight: 400,
        fontSize: "12px",
        color: item.detail === item.state ? item.textColor
            : theme === "light" ? "#24292f" : "#c9d1d9",
    })

    return (
        <>
            <Card {...defaultProps} >
                {header ?
                    <CardHeader title="Current Plan" sx={{ pt: 1, pb: 1 }}
                        titleTypographyProps={titleTypoProps}
                        action={<Button onClick={goTo} sx={actionBtnStyle} >Upgrade</Button>} />
                    : null
                }
                <CardContent sx={{ mt: "0px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", }} >
                        <Avatar src={isAuth?.avatar} style={{ width: "80px", height: "80px", }} />
                        <Typography variant="body2" component="p"
                            sx={companyTypoStyle}> {header ? "Bizwise Technologies" : isAuth?.firstName + " " + isAuth?.lastName}
                        </Typography>
                        <Typography variant="subtitle1" component="p"
                            sx={planTypoStyle}>{header ? "Basic" : "Super Admin"}
                        </Typography>
                    </Box>
                    <SecondaryDivider />
                    <Box >
                        <List disablePadding>
                            {data().map((about) => (
                                <ListItem key={about.name} sx={{ py: 0, px: 0 }}>
                                    <ListItemText primary={about.name} primaryTypographyProps={nameTypoStyle} />
                                    <Typography variant="body2" sx={detailsTypoStyle(about)}>{about.detail}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};
export default InfoCard;
