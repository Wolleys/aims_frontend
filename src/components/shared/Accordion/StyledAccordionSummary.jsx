import { useContext } from "react";
import { styled, Typography } from "@mui/material";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

function StyledAccordionSummary({ children, }) {
    const { theme } = useContext(ThemeContext);

    const iconStyles = {
        fontSize: "0.7rem",
        color: theme === "light" ? "#57606a" : "#8b949e",
    }
    const accordionSummaryDefaultProps = {
        expandIcon: <ArrowForwardIosSharpIcon sx={iconStyles} />,
        sx: {
            color: theme === "light" ? "#57606a" : "#8b949e",
            "&.Mui-expanded": {
                color: theme === "light" ? "#24292f" : "#c9d1d9",
                backgroundColor: theme === "light" ? "#f6f8fa" : "#161b22",
                "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
                    color: theme === "light" ? "#24292f" : "#c9d1d9",
                }
            },
            "&:hover": {
                color: theme === "light" ? "#24292f" : "#c9d1d9",
                backgroundColor: theme === "light" ? "#f6f8fa" : "#161b22",
                "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
                    color: theme === "light" ? "#24292f" : "#c9d1d9",
                }
            }
        }
    }
    const summeryTypoStyles = {
        fontSize: "14px",
    }

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary {...accordionSummaryDefaultProps} {...props} />
    ))(() => ({
        backgroundColor: theme === "light" ? "#fafafa" : "#0d1117",
        flexDirection: "row-reverse",
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(90deg)",
        },
        "& .MuiAccordionSummary-content": {
            marginLeft: 1,
        },
    }));

    return (
        <>
            <AccordionSummary>
                <Typography sx={summeryTypoStyles}>
                    {children}
                </Typography>
            </AccordionSummary>
        </>
    );
}

export default StyledAccordionSummary;
