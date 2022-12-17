import ErrorBtn from "../FormsUI/Button/ErrorBtn";
import { Fragment, forwardRef, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { CloseJobContext } from "../../../context/CloseJobContextProvider";
import { Dialog, DialogActions, Button, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function CloseJobDialog(props) {
    const { theme } = useContext(ThemeContext);
    const { openDialog, handleCloseDialog } = useContext(CloseJobContext);

    const paperPropsStyle = {
        boxShadow: "none",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        border: theme === "light" ? "1px solid #ff818266" : "1px solid #f8514966",
    };

    const defaultProps = {
        open: openDialog,
        keepMounted: true,
        onClose: handleCloseDialog,
        TransitionComponent: Transition,
        PaperProps: {
            sx: paperPropsStyle
        }
    }

    const dialogTitleStyle = {
        paddingTop: 0.5,
        marginBottom: 1,
        fontSize: "14px",
        fontWeight: "600",
        paddingBottom: 0.5,
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }

    const dialogContentTextStyle = {
        fontSize: "14px",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }

    const butttonProps = {
        color: "error",
        variant: "outlined",
        onClick: handleCloseDialog,
        sx: {
            fontSize: 14,
            lineHeight: 1.3,
            textTransform: "none",
        }
    }

    return (
        <Fragment>
            <Dialog {...defaultProps} >
                <DialogTitle sx={dialogTitleStyle}> Are you absolutely sure? </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert" sx={dialogContentTextStyle} >
                        Once you close, there is no going back. Please be certain.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button {...butttonProps} > Cancle
                    </Button>
                    <ErrorBtn onClick={() => { handleCloseDialog(); }}> Close Job </ErrorBtn>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
