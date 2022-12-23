import { useNavigate } from "react-router-dom";
import ActionBtn from "../../../../../components/shared/FormsUI/Button/ActionBtn";
import UtilityBtn from "../../../../../components/shared/FormsUI/Button/UtilityBtn";

function ActionButtons() {
    const navigate = useNavigate();
    const goTo = () => navigate("/settings/billing/plans");

    const actionBtnStyle = {
        mr: 1,
        ml: 1,
        fontSize: "13px",
    };

    return (
        <>
            <UtilityBtn onClick={goTo} style={{ fontSize: "13px" }}>Compare all plans</UtilityBtn>
            <ActionBtn onClick={goTo} sx={actionBtnStyle}>Upgrade</ActionBtn>
        </>
    );
}

export default ActionButtons;
