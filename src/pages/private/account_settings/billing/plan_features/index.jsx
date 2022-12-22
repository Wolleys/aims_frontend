import { useContext } from "react";
import HeaderList from "./headerList";
import ActionButtons from "./actionButtons";
import { Card, CardContent, CardHeader, Box } from "@mui/material";
import { ThemeContext } from "../../../../../context/ThemeContextProvider";

function PlanFeatures(props) {
    const { theme } = useContext(ThemeContext);

    const cardStyles = {
        elavation: 0,
        borderRadius: "0px",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
    };
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
    const subHeaderTypoProps = {
        display: { xs: "block", sm: "none" },
    }
    const subHeaderBoxStyles = {
        mt: 1, mb: 1,
        textAlign: "right"
    }
    const actionBoxStyles = {
        display: { xs: "none", sm: "block" },
    }
    const cardContentStyles = {
        borderRadius: "4px",
        pl: 0, pr: 0, pt: 0, mt: 2,
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    }

    return (
        <Card {...defaultProps} >
            <CardHeader title="Current plan features" sx={headerStyles}
                titleTypographyProps={titleTypoProps}
                subheader={<Box sx={subHeaderBoxStyles} > {ActionButtons()} </Box>}
                subheaderTypographyProps={subHeaderTypoProps}
                action={<Box sx={actionBoxStyles} > {ActionButtons()} </Box>}
            />
            <CardContent sx={cardContentStyles}>
                <HeaderList theme={theme} />
            </CardContent>
        </Card>
    );
};
export default PlanFeatures;
