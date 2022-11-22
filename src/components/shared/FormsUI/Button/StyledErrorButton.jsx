import { Button, styled } from "@mui/material";

const ErrorButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 14,
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#d32f2f",
    borderColor: "#d32f2f",
    "&:hover": {
        backgroundColor: "#c62828",
        borderColor: "#c62828",
        boxShadow: "none",
    },
    "&:active": {
        boxShadow: "none",
        backgroundColor: "#c62828",
        borderColor: "#c62828",
    },
});


export default function StyledErrorButton({ ...props }) {
    return <ErrorButton {...props} />;
}
