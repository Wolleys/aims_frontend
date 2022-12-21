import { useContext } from "react";
import { Link } from "react-router-dom";
import { Box, Card, Typography, } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

const revenue = [
    {
        title: "Current monthly bill",
        content: "$".concat("7.00"),
        label: "Switch to yearly billing",
        href: "/account/upgrade",
    },
    {
        title: "Next payment due",
        content: "March 14",
        label: "View payment history",
        href: "/account/billing/history",
    },
    {
        title: "Payment information",
        label: "Update billing information",
        href: "/settings/billing/billing_information",
        billing: "Update payment method",
        link: "/settings/billing/payment_method",
    },
];

function CardLabels() {
    const { theme } = useContext(ThemeContext);

    const boxStyle = {
        gap: 2, display: "grid",
        gridTemplateColumns: { md: "repeat(3, 1fr)", sm: "repeat(2, 1fr)", xs: "repeat(1, 1fr)" }
    }

    const cardStyle = {
        borderRadius: "6px",
        backgroundColor: theme === "light" ? "#f6f8fa" : "#161b22",
    }

    const linkStyle = {
        fontSize: 12,
        textDecoration: "none",
        color: theme === "light" ? "#0969da" : "#58a6ff",
    }

    return (
        <>
            <Box sx={boxStyle}>
                {revenue.map((item) => (
                    <Card key={item.title} sx={cardStyle} elevation={0} >
                        <Box sx={{ alignItems: "center", display: "flex", p: 2 }} >
                            <Box>
                                <Typography><span className="card_label">{item.title}</span></Typography>
                                <Typography><span className="card_prices">{item.content}</span></Typography>
                                <Link style={linkStyle} to={item.href}>{item.label}</Link>
                                <Box>
                                    <Link style={linkStyle} to={item.link}>{item.billing}</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Card>
                ))}
            </Box>
        </>
    );
};
export default CardLabels;
