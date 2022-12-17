import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Fragment, useState, useContext } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeContext } from "../../../../context/ThemeContextProvider";
import MenuDivider from "../../../../components/shared/Divider/menuDivider";
import DeleteDialog from "../../../../components/shared/DialogActions/DeleteDialog";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import { Menu, MenuItem, IconButton, ListItemText, ListItemIcon, } from "@mui/material";

export default function ActionMenu(props) {
    const { row } = props;
    const navigate = useNavigate();
    const { theme } = useContext(ThemeContext);
    const [anchorEl, setAnchorEl] = useState(null);

    //Vertical Menu
    const openMenu = Boolean(anchorEl);
    const handleOpenMenu = (event) => { setAnchorEl(event.currentTarget) };
    const handleCloseMenu = () => { setAnchorEl(null) };

    //Delete Dialog
    const [openDialog, setOpenDialog] = useState(false);
    const handleOpenDialog = () => { setOpenDialog(true) };
    const handleCloseDialog = (event, reason) => {
        if (reason !== "backdropClick") {
            setOpenDialog(false);
        }
    };

    const vertIconStyle = {
        color: theme === "light" ? "#57606a" : "#8b949e",
    }
    const menuStyle = {
        backgroundColor: theme === "light" ? "background.paper" : "#161B22",
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    }
    const menuItemStyle = {
        "& .MuiListItemText-primary":{
            fontSize: "14px",
            color: theme === "light" ? "#24292f" : "#c9d1d9",
        },
        "& .MuiSvgIcon-root": {
            fontSize: "17px",
            color: theme === "light" ? "#57606a" : "#8b949e",
        },
        "&:hover": {
            color: theme === "light" ? "#444" : "#fff",
            backgroundColor: theme === "light" ? "#F5F5F5" : "#5046e4",
            "& .MuiSvgIcon-root": {
                color: theme === "light" ? "#5046e4" : "#fff",
            },
        }
    }

    //Links
    const editPart = (row) => { navigate(`/part-entry/default/edit-part/${row.id}`) }
    const purchasePart = (row) => { navigate(`/part-entry/default/purchase-part/${row.id}`) }
    const purchaseHistory = (row) => { navigate(`/part-entry/default/purchase-history/${row.id}`) }
    const issueHistory = (row) => { navigate(`/part-entry/default/issue-history/${row.id}`) }

    const menuItems = [
        { label: "Edit", link: () => { editPart(row); }, icon: EditIcon },
        { label: "Purchase", link: () => { purchasePart(row); }, icon: AddCircleIcon },
        { label: "P. History", link: () => { purchaseHistory(row); }, icon: ShoppingCartIcon },
        { label: "I. History", link: () => { issueHistory(row); }, icon: TransferWithinAStationIcon },
    ];

    return (
        <Fragment>
            <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined} onClick={handleOpenMenu} >
                <MoreVertIcon sx={vertIconStyle} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}
                PaperProps={{ sx: menuStyle }} elevation={0}
                anchorOrigin={{ vertical: "top", horizontal: "left", }}
                transformOrigin={{ vertical: "top", horizontal: "left", }} >

                {menuItems.map((item) => (
                    <MenuItem key={item.label} onClick={() => { handleCloseMenu(); item.link(); }} sx={menuItemStyle} >
                        <ListItemIcon><item.icon fontSize="small" /></ListItemIcon>
                        <ListItemText> {item.label} </ListItemText>
                    </MenuItem>
                ))}
                <MenuDivider />
                <MenuItem onClick={() => { handleOpenDialog(); handleCloseMenu(); }} sx={{ color: "error.main" }}>
                    <ListItemIcon><DeleteIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: "bold", color: "#C62828" }}>Delete </ListItemText>
                </MenuItem>
            </Menu>
            <DeleteDialog open={openDialog} handleCloseDialog={handleCloseDialog} />
        </Fragment>
    );
}
