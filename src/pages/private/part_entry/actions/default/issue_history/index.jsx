import { useParams } from "react-router-dom";

function IssueHistory() {
    const { partId } = useParams();
    return <h1>Issue History For - {partId} </h1>;
}

export default IssueHistory;
