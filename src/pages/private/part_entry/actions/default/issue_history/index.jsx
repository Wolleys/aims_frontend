import { useParams } from "react-router-dom";
import IssuedPartsHistory from "./tables/issuedPartsHistory";

function IssueHistory() {
    const { partId } = useParams();
    return (
        <IssuedPartsHistory partId={partId} />
    );
}

export default IssueHistory;
