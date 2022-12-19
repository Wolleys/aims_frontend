import { useLocation } from "react-router-dom";

function DashboardLinks(label) {
    const { pathname } = useLocation();
    const pathLinks = ((pathname === "/dashboard/overview") || (pathname === "/dashboard/sales"));
    return label === "Dashboard" && pathLinks;
}

export default DashboardLinks;
