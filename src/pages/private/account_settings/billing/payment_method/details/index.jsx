import { useState } from "react";
import Cardetails from "./cardetails";
import EditCardForm from "./editCardForm";
import MobileNumDetails from "./mobileNumDetails";
import EditMobileNumForm from "./editMobileNumForm";
import { Typography, Container } from "@mui/material";
import StyledAccordion from "../../../../../../components/shared/Accordion/StyledAccordion";
import StyledAccordionDetails from "../../../../../../components/shared/Accordion/StyledAccordionDetails";
import StyledAccordionSummary from "../../../../../../components/shared/Accordion/StyledAccordionSummary";

export default function PaymentDetails() {
    const [editing, setEditing] = useState(false);
    const [expanded, setExpanded] = useState("creditCard");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const editInfo = (company) => {
        setEditing(true);
    };

    const containerProps = {
        maxWidth: "sm",
        sx: {
            textAlign: "left",
            padding: {
                xs: 0, sm: "0 16px"
            }
        }
    }

    return (
        <>
            <StyledAccordion expanded={expanded === "creditCard"} onChange={handleChange("creditCard")}>
                <StyledAccordionSummary>
                    Credit card
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Container {...containerProps} >
                        {editing ? <EditCardForm setEditing={setEditing} />
                            : <Cardetails editInfo={editInfo} />
                        }
                    </Container>
                </StyledAccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === "payPal"} onChange={handleChange("payPal")}>
                <StyledAccordionSummary>
                    Paypal
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Typography>
                        details
                    </Typography>
                </StyledAccordionDetails>
            </StyledAccordion>
            <StyledAccordion expanded={expanded === "mobile"} onChange={handleChange("mobile")}>
                <StyledAccordionSummary>
                    Mobile number
                </StyledAccordionSummary>
                <StyledAccordionDetails>
                    <Container {...containerProps}>
                        {editing ? <EditMobileNumForm setEditing={setEditing} />
                            : <MobileNumDetails editInfo={editInfo} />
                        }
                    </Container>
                </StyledAccordionDetails>
            </StyledAccordion>
        </>
    );
}
