import StyledBackButton from "./StyledBackButton";

const BackBtn = ({ children, ...otherProps }) => {
    const configButton = {
        size: "small",
        ...otherProps,
        variant: "contained",
        disableElevation: true,
    };

    return <StyledBackButton {...configButton}>{children}</StyledBackButton>;
};

export default BackBtn;
