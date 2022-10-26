import { Fragment, useState } from 'react';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteDialog from "../../../../components/shared/DeleteDialog";
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import { Menu, MenuItem, IconButton, ListItemText, ListItemIcon, Divider, } from '@mui/material';

export default function ActionMenu(props) {
    const { row } = props;
    const navigate = useNavigate();
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

    //Links
    const editPart = (row) => { navigate(`/parts-entry/default/edit-part/${row.id}`) }
    const purchaseHistory = (row) => { navigate(`/parts-entry/default/purchase-history/${row.id}`) }
    const issueHistory = (row) => { navigate(`/part/issue-history/${row.id}`) }
    const purchasePart = (row) => { navigate(`/part/purchase-part/${row.id}`) }

    const menuItems = [
        { label: "Edit", link: () => { editPart(row); }, icon: EditIcon },
        { label: "P. History", link: () => { purchaseHistory(row); }, icon: ShoppingCartIcon },
        { label: "I. History", link: () => { issueHistory(row); }, icon: TransferWithinAStationIcon },
        { label: "Purchase", link: () => { purchasePart(row); }, icon: AddCircleIcon },
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
                <MenuItem onClick={() => { handleOpenDialog(); handleCloseMenu(); }} sx={{ color: 'error.main' }}>
                    <ListItemIcon><DeleteIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: 'bold', color: '#C62828' }}>Delete </ListItemText>
                </MenuItem>
            </Menu>
            <DeleteDialog open={openDialog} handleCloseDialog={handleCloseDialog} />
        </Fragment>
    );
}
