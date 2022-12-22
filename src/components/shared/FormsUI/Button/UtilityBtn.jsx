import StyledUtilityButton from "./StyledUtilityButton";

const UtilityBtn = ({ children, ...otherProps }) => {
    const configButton = {
        ...otherProps,
    };

    return <StyledUtilityButton {...configButton} >{children}</StyledUtilityButton>;
};

export default UtilityBtn;
