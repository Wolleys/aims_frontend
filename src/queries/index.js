import { useQuery, useMutation } from "react-query";
import { validateAuth, login } from "../api/auth";
import { getAllOrganizations } from "../api/organizations";

export const Login = () => useMutation(login);
export const Validate = () => useQuery(["validation"], validateAuth);
export const Organization = () => useQuery(["organization"], getAllOrganizations);
