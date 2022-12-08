import { useContext } from "react";
import { Select } from "@mui/material";
import { ThemeContext } from "../../../../context/ThemeContextProvider";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

const StyledFilter = ({ ...props }) => {
    const { theme } = useContext(ThemeContext);

    const inputPropsStyle = {
        sx: {
            fontWeight: 400,
            fontSize: "14px",
            color: theme === "light" ? "#24292f" : "#c9d1d9",
        },
    };

    const dropDownMenuStyle = {
        PaperProps: {
            style: {
                marginTop: "5px",
                boxShadow: "none",
                borderRadius: "4px",
                backgroundColor: theme === "light" ? "#ffffff" : "#161B22",
                border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
            },
        },
    };

    const selectStyle = {
        fontSize: "14px",
        borderRadius: "4px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        "& .MuiSvgIcon-root": {
            fontSize: "17px",
            marginRight: "3px",
            color: theme === "light" ? "#5046e4" : "#8b949e",
        },
        // "&:hover": {
        //     backgroundColor: theme === "light" ? "#F3F4F6" : "#30363D",
        // }
    };

    const defaultProps = {
        sx: selectStyle,
        variant: "standard",
        disableUnderline: true,
        MenuProps: dropDownMenuStyle,
        inputProps: inputPropsStyle,
        IconComponent: FilterListOutlinedIcon,
    };

    return <Select {...defaultProps} {...props} />;
};

export default StyledFilter;
