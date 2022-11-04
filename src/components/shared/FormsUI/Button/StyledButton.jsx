import { Button, styled } from "@mui/material";

const SubmitButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 14,
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#5046e4",
    borderColor: "#5046e4",
    "&:hover": {
        backgroundColor: "#0069d9",
        borderColor: "#0062cc",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#0062cc",
        borderColor: "#005cbf",
    },
    
});

export default function StyledButtons({ ...props }) {
    return <SubmitButton {...props} />;
}
