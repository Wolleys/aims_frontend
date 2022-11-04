import { useFormikContext } from "formik";
import StyledButtons from "./StyledButton";

const SubmitBtn = ({ children, ...otherProps }) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    };

    const configButton = {
        ...otherProps,
        variant: "contained",
        onClick: handleSubmit,
        disableElevation: true,
    };

    return <StyledButtons {...configButton}>{children}</StyledButtons>;
};

export default SubmitBtn;
