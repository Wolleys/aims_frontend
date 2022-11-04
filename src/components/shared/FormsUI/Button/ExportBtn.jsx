import StyledButtons from "./StyledButton";

const ExportBtn = ({ children, ...otherProps }) => {
    const configButton = {
        size: "small",
        ...otherProps,
        variant: "contained",
        disableElevation: true,
    };

    return <StyledButtons {...configButton}>{children}</StyledButtons>;
};

export default ExportBtn;
