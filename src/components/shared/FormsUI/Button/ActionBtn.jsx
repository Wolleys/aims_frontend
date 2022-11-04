import StyledButtons from "./StyledButton";

const ActionBtn = ({ children, ...otherProps }) => {
    const configButton = {
        size: "small",
        ...otherProps,
        variant: "contained",
        disableElevation: true,
    };

    return <StyledButtons {...configButton}>{children}</StyledButtons>;
};

export default ActionBtn;
