import StyledTextField from "../StyledTextField";

function NormalTextField({ ...otherProps }) {
    const configTextField = {
        ...otherProps,
    };

    return <StyledTextField {...configTextField} />;
}

export default NormalTextField;
