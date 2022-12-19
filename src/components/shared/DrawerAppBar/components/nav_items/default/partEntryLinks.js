import { useLocation, useParams } from "react-router-dom";

function PartEntryLinks(label) {
    const { partId } = useParams();
    const { pathname } = useLocation();
    const pathLinks =
        pathname === "/part-entry/default" ||
        pathname === "/part-entry/default/add-part" ||
        pathname === `/part-entry/default/edit-part/${partId}` ||
        pathname === `/part-entry/default/purchase-part/${partId}` ||
        pathname === `/part-entry/default/purchase-history/${partId}`;
    return label === "Part Entry" && pathLinks;
}

export default PartEntryLinks;
