import { useContext } from "react";
import StyledTextField from "../TextField/StyledTextField";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

const StyledSelect = ({ ...props }) => {
    const { theme } = useContext(ThemeContext);

    const dropDownMenu = {
        MenuProps: {
            PaperProps: {
                style: {
                    marginTop: "5px",
                    boxShadow: "none",
                    borderRadius: "4px",
                    backgroundColor: theme === "light" ? "#ffffff" : "#161B22",
                    border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
                },
            },
        },
    };

    const input = {
        fontWeight: 400,
        fontSize: "14px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    };

    const defaultProps = {
        select: true,
        InputProps: {
            sx: input,
        }
    };
    return <StyledTextField SelectProps={dropDownMenu} {...defaultProps} {...props} />;
};

export default StyledSelect;
