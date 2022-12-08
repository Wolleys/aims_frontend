import { MenuItem } from "@mui/material";
import StyledFilter from "./StyledFilter";
import { useContext, useState } from "react";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

const Filter = ({ name, options, ...otherProps }) => {
    const [filter, setFilter] = useState("");
    const { theme } = useContext(ThemeContext);

    const menuItemStyle = {
        fontSize: "14px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
        "&:hover": {
            backgroundColor:
                theme === "light" ? "#F0F2F4 !important" : "#21262C !important",
        },
        "&.Mui-selected, &.Mui-selected:hover": {
            backgroundColor: theme === "light" ? "#F0F2F4" : "#21262C",
        },
    };

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const configSelect = {
        ...otherProps,
        onChange: handleChange,
    };

    return (
        <StyledFilter value={filter || "Last 30 days"} {...configSelect}>
            {options?.map((item) => (
                <MenuItem key={item.label} value={item.value} sx={menuItemStyle}>
                    {item.label}
                </MenuItem>
            ))}
        </StyledFilter>
    );
};

export default Filter;
