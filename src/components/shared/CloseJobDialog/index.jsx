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
        sx: {
            boxShadow: "none",
            backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
            border: theme === "light" ? "1px solid #ff818266" : "1px solid #f8514966",
        },
    };

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

    return (
        <Fragment>
            <Dialog open={openDialog} TransitionComponent={Transition} keepMounted onClose={handleCloseDialog}
                PaperProps={paperPropsStyle} >
                <DialogTitle sx={dialogTitleStyle}> Are you absolutely sure? </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert" sx={dialogContentTextStyle} >
                        Once you close, there is no going back. Please be certain.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="error" onClick={handleCloseDialog}
                        sx={{ textTransform: "none", lineHeight: 1.3, fontSize: 14, }} > Cancle
                    </Button>
                    <ErrorBtn onClick={() => { handleCloseDialog(); }}> Close Job </ErrorBtn>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
