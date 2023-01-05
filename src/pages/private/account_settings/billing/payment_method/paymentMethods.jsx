import { useContext, useState } from "react";
import { ThemeContext } from "../../../../../context/ThemeContextProvider";
import { Card, CardContent, CardHeader, Box, Typography, Link } from "@mui/material";

function PaymentMethods() {
    const { theme } = useContext(ThemeContext);
    const [addInfo, setAddInfo] = useState(false);

    const addInformation = (company) => {
        setAddInfo(true);
    };

    const cardStyles = {
        elavation: 0,
        borderRadius: "0px",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
    }
    const defaultProps = {
        sx: cardStyles,
        variant: "none",
    }
    const headerStyles = {
        p: 0, pt: 1, pb: 0.7,
        borderBottom: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    }
    const titleTypoProps = {
        lineHeight: 1.5,
        fontSize: "20px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }
    const cardContentStyles = {
        borderRadius: "4px",
        pl: 0, pr: 0, pt: 0, mt: 2,
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
        "&.MuiCardContent-root:last-child": {
            paddingBottom: 0
        }
    }
    const boxStyles = {
        padding: "8px 16px",
        textAlign: "center"
    }
    const typoStyles = {
        pt: 1,
        fontSize: 14,
        color: theme === "light" ? "#57606a" : "#8b949e",
    }
    const linkStyles = {
        fontSize: 12,
        cursor: "pointer",
        textDecoration: "none",
        color: theme === "light" ? "#0969da" : "#58a6ff",
    }

    const emptyState = () => {
        return (
            <>
                <Typography component="p" sx={typoStyles}> You have not added a payment method.</Typography>
                <Link style={linkStyles} onClick={addInformation} >Add Information</Link>
            </>
        )
    }

    return (
        <Card {...defaultProps} >
            <CardHeader title="Payment method"
                sx={headerStyles}
                titleTypographyProps={titleTypoProps}
            />
            <CardContent sx={cardContentStyles}>
                <Box style={boxStyles}>
                    {addInfo ? "Add" : emptyState()
                    }
                </Box>
            </CardContent>
        </Card>
    );
};
export default PaymentMethods;
