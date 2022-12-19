import { useLocation, useParams } from "react-router-dom";

function HangarUseLinks(label) {
    const { partId } = useParams();
    const { pathname } = useLocation();
    const pathLinks =
        pathname === "/hangar-use/default" ||
        pathname === "/hangar-use/default/issue-part" ||
        pathname === `/hangar-use/default/edit-issue/${partId}`;
    return label === "Hangar Use" && pathLinks;
}

export default HangarUseLinks;
