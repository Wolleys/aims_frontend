import { Fragment, forwardRef } from "react";
import { Dialog, DialogActions, Button, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function DeleteDialog(props) {
    const { open, handleCloseDialog, row, handleDelete, handleClick } = props;

    return (
        <Fragment>
            <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleCloseDialog} aria-describedby="alert" >
                <DialogTitle sx={{ paddingBottom: 0.5, paddingTop: 0.5, fontSize: '16px', fontWeight: '600' }}>
                    Confirm Delete
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert" sx={{ color: 'text.primary', fontSize: '15px' }} >
                        Once you delete, there is no going back. Please be certain.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="error" onClick={handleCloseDialog} 
                        sx={{ textTransform: 'none', }} > Cancle
                    </Button>
                    <Button variant="contained" color="error" disableElevation sx={{ textTransform: 'none', }}
                        onClick={() => { handleCloseDialog(); handleDelete(row.id); handleClick() }}> Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}
