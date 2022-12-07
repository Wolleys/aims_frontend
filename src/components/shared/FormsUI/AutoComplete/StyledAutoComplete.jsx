import { useContext } from "react";
import { Paper, Autocomplete } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

export default function StyledAutoComplete({ ...props }) {
    const { theme } = useContext(ThemeContext);

    const listBoxStyle = {
        fontSize: "14px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
        "& .Mui-focused": {
            backgroundColor: theme === "light" ? "#F0F2F4 !important" : "#21262C !important",
        },
        "& :hover": {
            backgroundColor: theme === "light" ? "#F0F2F4 !important" : "#21262C !important",
        }
    }

    const CustomPaper = (props) => {
        return (
            <Paper
                variant="outlined"
                {...props}
                style={{
                    marginTop: "5px",
                    borderRadius: "4px",
                    backgroundColor: theme === "light" ? "#ffffff" : "#161B22",
                    border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
                }}
            />
        );
    };
    const defaultProps = {
        size: "small",
        ListboxProps: {
            sx: listBoxStyle
        },
        PaperComponent: CustomPaper,
        getOptionLabel: (option) => option.label,
        isOptionEqualToValue: (option, value) => option.value === value.value,
    };

    return <Autocomplete {...defaultProps} {...props} />;
}
