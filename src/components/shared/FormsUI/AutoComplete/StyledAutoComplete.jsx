import { Paper, Autocomplete } from "@mui/material";

const CustomPaper = (props) => {
    return (
        <Paper
            variant="outlined"
            {...props}
            style={{
                fontSize: "14px",
                marginTop: "5px",
                color: "#666",
                borderRadius: "4px",
            }}
        />
    );
};
const defaultProps = {
    size: "small",
    PaperComponent: CustomPaper,
    getOptionLabel: (option) => option.label,
    isOptionEqualToValue: (option, value) => option.value === value.value,
};

export default function StyledAutoComplete({ ...props }) {
    return <Autocomplete {...defaultProps} {...props} />;
}
