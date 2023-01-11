import { useState } from "react";
import CreditCardForm from "./creditCardForm";
import MobileNumberForm from "./mobileNumberForm";
import { Typography, Container } from "@mui/material";
import StyledAccordion from "../../../../../../components/shared/Accordion/StyledAccordion";
import StyledAccordionDetails from "../../../../../../components/shared/Accordion/StyledAccordionDetails";
import StyledAccordionSummary from "../../../../../../components/shared/Accordion/StyledAccordionSummary";

export default function SelectMethod(props) {
    const { setAddInfo } = props;
    const [expanded, setExpanded] = useState("creditCard");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const containerProps = {
        maxWidth: "sm",
        sx: {
            textAlign: "left",
        }
    }

    return (
        <>
            <StyledAccordion expanded={expanded === "creditCard"} onChange={handleChange("creditCard")}>
                <StyledAccordionSummary>
                    Pay with credit card
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Container {...containerProps} >
                        <CreditCardForm setAddInfo={setAddInfo} />
                    </Container>
                </StyledAccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === "payPal"} onChange={handleChange("payPal")}>
                <StyledAccordionSummary>
                    Pay with Paypal
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Typography>
                        Sign in to Paypal
                    </Typography>
                </StyledAccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === "mobile"} onChange={handleChange("mobile")}>
                <StyledAccordionSummary>
                    Pay with mobile money
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Container {...containerProps}>
                        <MobileNumberForm setAddInfo={setAddInfo} />
                    </Container>
                </StyledAccordionDetails>
            </StyledAccordion>
        </>
    );
}
