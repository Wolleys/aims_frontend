import StyledErrorButton from "./StyledErrorButton";

const ErrorBtn = ({ children, ...otherProps }) => {
    const configButton = {
        size: "small",
        ...otherProps,
        variant: "contained",
        disableElevation: true,
    };

    return <StyledErrorButton {...configButton}>{children}</StyledErrorButton>;
};

export default ErrorBtn;
