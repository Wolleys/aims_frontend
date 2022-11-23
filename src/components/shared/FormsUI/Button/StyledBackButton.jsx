import { Button, styled } from "@mui/material";

const BackButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 14,
    border: "1px solid",
    lineHeight: 1.5,
    color: "#5046e4",
    backgroundColor: "transparent",
    borderColor: "#5046e4",
    "&:hover": {
        backgroundColor: "#F1F5F9",
        borderColor: "#0062cc",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#0062cc",
        borderColor: "#005cbf",
    },
    
});

export default function StyledBackButton({ ...props }) {
    return <BackButton {...props} />;
}
