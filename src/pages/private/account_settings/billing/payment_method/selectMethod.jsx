import { useState } from "react";
import { Typography } from "@mui/material";
import StyledAccordion from "../../../../../components/shared/Accordion/StyledAccordion";
import StyledAccordionDetails from "../../../../../components/shared/Accordion/StyledAccordionDetails";
import StyledAccordionSummary from "../../../../../components/shared/Accordion/StyledAccordionSummary";

export default function SelectMethod() {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <StyledAccordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <StyledAccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    Pay with credit card
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Typography>
                        Credit card form
                    </Typography>
                </StyledAccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <StyledAccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    Pay with Paypal
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Typography>
                        Sign in to Paypal
                    </Typography>
                </StyledAccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <StyledAccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    Pay with mobile money
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Typography>
                        Number used to send the payment
                    </Typography>
                </StyledAccordionDetails>
            </StyledAccordion>
        </div>
    );
}
