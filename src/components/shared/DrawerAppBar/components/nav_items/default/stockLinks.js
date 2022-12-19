import { useLocation } from "react-router-dom";

function StockLinks(label) {
    const { pathname } = useLocation();
    const pathLinks = (pathname === "/stock/default");
    return label === "Stock" && pathLinks;
}

export default StockLinks;
