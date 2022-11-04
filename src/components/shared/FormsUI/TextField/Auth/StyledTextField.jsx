import { Fragment } from "react";
import { TextField, styled } from "@mui/material";

const AuthTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
        "& input": {
            color: "#666",
            height: "unset",
            fontWeight: 400,
            fontSize: "14px",
            padding: "6px 12px",
            "&::placeholder": {
                color: "#03060b",
                fontWeight: 500,
            },
        },
        "& fieldset": {
            borderRadius: "6px",
            border: "1px solid #d5d8e1",
        },
        "&:hover fieldset": {
            border: "1px solid #d5d8e1",
        },
        "&.Mui-focused fieldset": {
            border: "0px solid #c6beee",
            boxShadow: "rgb(80 70 228 / 25%) 0px 0px 0px 0.2rem",
        },
    },
}));

export default function StyledTextField({ ...props }) {
    return (
        <Fragment>
            <AuthTextField {...props} />
        </Fragment>
    );
}
