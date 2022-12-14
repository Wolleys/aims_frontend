import SignIn from "./form";
import AuthLayout from "../../../components/shared/Layout/auth";

function Login() {
  return <AuthLayout form={<SignIn />} header="Sign in" />;
}

export default Login;
