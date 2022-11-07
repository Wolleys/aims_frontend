import { Fragment, forwardRef, useContext } from "react";
import { CloseJobContext } from "../../../context/CloseJobContextProvider";
import { Dialog, DialogActions, Button, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function CloseJobDialog(props) {
    const { openDialog, handleCloseDialog } = useContext(CloseJobContext);

    return (
        <Fragment>
            <Dialog open={openDialog} TransitionComponent={Transition} keepMounted onClose={handleCloseDialog} aria-describedby="alert" >
                <DialogTitle sx={{ paddingBottom: 0.5, paddingTop: 0.5, fontSize: '16px', fontWeight: '600' }}>
                    Confirm Close Job
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert" sx={{ color: 'text.primary', fontSize: '15px' }} >
                        Once you close, there is no going back. Please be certain.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="error" onClick={handleCloseDialog} 
                        sx={{ textTransform: 'none', }} > Cancle
                    </Button>
                    <Button variant="contained" color="error" disableElevation sx={{ textTransform: 'none', }}
                        onClick={() => { handleCloseDialog(); }}> Close Job
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
