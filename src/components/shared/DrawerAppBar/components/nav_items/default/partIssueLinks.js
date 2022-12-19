import { useLocation } from "react-router-dom";

function PartIssueLinks(label) {
    const { pathname } = useLocation();
    const pathLinks = (pathname === "/part-issue/default");
    return label === "Part Issue" && pathLinks;
}

export default PartIssueLinks;
