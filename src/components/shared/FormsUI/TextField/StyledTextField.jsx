import { TextField, styled } from "@mui/material";

const PrimaryTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
        "& input": {
            color: "#666",
            fontWeight: 400,
            fontSize: "15px",
        },
        "& fieldset": {
            borderRadius: "4px",
            border: "1px solid #d5d8e1",
        },
        "&:hover fieldset": {
            border: "1px solid #d5d8e1",
        },
        "&.Mui-focused fieldset": {
            border: "1px solid #c6beee",
        },
    },
}));

export default function StyledTextField({ ...props }) {
    return <PrimaryTextField {...props} />;
}
