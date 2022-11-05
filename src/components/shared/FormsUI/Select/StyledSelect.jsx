import StyledTextField from "../TextField/StyledTextField";

const dropDownMenu = {
    MenuProps: {
        PaperProps: {
            style: {
                color: "#666",
                marginTop: "5px",
                boxShadow: "none",
                borderRadius: "4px",
                border: "1px solid #d5d8e1",
            },
        },
    },
};

const input = {
    color: "#666",
    fontSize: "14px",
    fontWeight: 400,
};

const defaultProps = {
    select: true,
    InputProps: {
        sx: input,
    },
};

const StyledSelect = ({ ...props }) => {
    return <StyledTextField SelectProps={dropDownMenu} {...defaultProps} { ...props } />;
};

export default StyledSelect;
