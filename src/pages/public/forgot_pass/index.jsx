import ForgotPasswordForm from "./form";
import AuthLayout from "../../../components/shared/Layout/auth";

function ForgotPassword() {
  return <AuthLayout form={<ForgotPasswordForm />} />;
}

export default ForgotPassword;
