import { Fragment, useState } from 'react';
import DeleteDialog from "../DeleteDialog";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Menu, MenuItem, IconButton, ListItemText, ListItemIcon, Divider, } from '@mui/material';

export default function MoreEditDel(props) {
    const { row, handleEdit, handleView } = props;
    const [anchorEl, setAnchorEl] = useState(null);

    //Vertical Menu
    const openMenu = Boolean(anchorEl);
    const handleOpenMenu = (event) => { setAnchorEl(event.currentTarget) };
    const handleCloseMenu = () => { setAnchorEl(null) };

    //Delete Dialog
    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => { setOpenDialog(true) };
    const handleCloseDialog = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpenDialog(false);
        }
    };

    const menuItems = [
        { label: "More", link: () => { handleView(row); }, icon: VisibilityIcon },
        { label: "Edit", link: () => { handleEdit(row); }, icon: EditIcon },
    ];

    return (
        <Fragment>
            <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined} onClick={handleOpenMenu} > <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'left', }}
                transformOrigin={{ vertical: 'top', horizontal: 'left', }}  >

                {menuItems.map((item) => (
                    <MenuItem key={item.label} onClick={() => { handleCloseMenu(); item.link(); }}>
                        <ListItemIcon><item.icon fontSize="small" /></ListItemIcon>
                        <ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium', color: '#444' }}> {item.label} </ListItemText>
                    </MenuItem>
                ))}
                <Divider />
                <MenuItem onClick={() => { handleOpenDialog(); handleCloseMenu(); }}>
                    <ListItemIcon><DeleteIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: 'bold', color: '#C62828' }}>Delete </ListItemText>
                </MenuItem>
            </Menu>
            <DeleteDialog open={openDialog} handleCloseDialog={handleCloseDialog} />
        </Fragment>
    );
}
