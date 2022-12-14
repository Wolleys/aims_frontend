import { useContext } from "react";
import { Box, Card, Avatar, Typography, } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

const revenue = [
    { content: "$25,100.00", label: "Unsold Products" },
    { content: "$25,100.00", label: "Market Price Value" },
    { content: "$25,100.00", label: "Retail Value" },
    { content: "$25,100.00", label: "Unrealized Profit" },
];

function CardLabels() {
    const { theme } = useContext(ThemeContext);

    const cardStyle = {
        borderRadius: "6px",
        backgroundColor: theme === "light" ? "#f6f8fa" : "#161b22",
    }

    const avatarStyle = {
        width: "1em",
        height: "1em",
        backgroundColor: theme === "light" ? "#ccc" : "#8b949e",
    }

    return (
        <>
            <Box sx={{
                gap: 3, display: "grid",
                gridTemplateColumns: { md: "repeat(4, 1fr)", sm: "repeat(2, 1fr)", xs: "repeat(1, 1fr)" }
            }}>
                {revenue.map((item) => (
                    <Card key={item.label} sx={cardStyle} elevation={0} >
                        <Box sx={{ alignItems: "center", display: "flex", p: 2 }} >
                            <Box sx={{ display: "flex", mr: 2 }} >
                                <Avatar sx={avatarStyle} > </Avatar>
                            </Box>
                            <Box>
                                <Typography><span className="card_label">{item.label}</span></Typography>
                                <Typography><span className="card_prices">{item.content}</span></Typography>
                            </Box>
                        </Box>
                    </Card>
                ))}
            </Box>
        </>
    );
};
export default CardLabels;
