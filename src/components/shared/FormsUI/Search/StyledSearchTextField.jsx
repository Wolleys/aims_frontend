import { TextField, styled } from "@mui/material";

const SearchTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
        "& input": {
            color: "#666",
            height: "unset",
            fontWeight: 400,
            fontSize: "14px",
            padding: "6px 0 6px 12px",
            "&::placeholder": {
                color: "#03060b",
                fontWeight: 500,
            },
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
        "& .MuiSvgIcon-root": {
            color: "#ccc",
            fontSize: "21px",
        },
    },
}));

const defaultProps = {
    size: "small",
    variant: "outlined",
    placeholder: "Search...",
};

export default function StyledSearchTextField({ ...props }) {
    return <SearchTextField {...defaultProps} {...props} />;
}
