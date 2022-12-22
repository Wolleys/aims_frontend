import ActionBtn from "../../../../../components/shared/FormsUI/Button/ActionBtn";
import UtilityBtn from "../../../../../components/shared/FormsUI/Button/UtilityBtn";

function ActionButtons() {
    const actionBtnStyle = {
        mr: 1,
        ml: 1,
        fontSize: "13px",
    };

    return (
        <>
            <UtilityBtn style={{ fontSize: "13px" }}>Compare all plans</UtilityBtn>
            <ActionBtn sx={actionBtnStyle}>Upgrade</ActionBtn>
        </>
    );
}

export default ActionButtons;
