import DeleteDialog from "../DeleteDialog";
import { useState, useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import MenuDivider from "../Divider/menuDivider";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { Menu, MenuItem, IconButton, ListItemText, ListItemIcon } from "@mui/material";

export default function EditDel(props) {
    const { row, action, navigate, editRow } = props;
    const { theme } = useContext(ThemeContext);
    const [anchorEl, setAnchorEl] = useState(null)

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
        "& .MuiListItemText-primary": {
            fontSize: "14px",
            color: theme === "light" ? "#24292f" : "#c9d1d9",
        },
        "& .MuiSvgIcon-root": {
            fontSize: "17px",
            color: theme === "light" ? "inherit" : "#8b949e",
        },
        "&:hover": {
            color: theme === "light" ? "#444" : "#fff",
            backgroundColor: theme === "light" ? "#F5F5F5" : "#5046e4",
            "& .MuiSvgIcon-root": {
                color: theme === "light" ? "#5046e4" : "#fff",
            },
        }
    }

    return (
        <>
            <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined} onClick={handleOpenMenu} >
                <MoreVertIcon sx={vertIconStyle} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}
                PaperProps={{ sx: menuStyle }} elevation={0}
                anchorOrigin={{ vertical: "top", horizontal: "left", }}
                transformOrigin={{ vertical: "top", horizontal: "left", }} >

                {action ?
                    <MenuItem onClick={() => { handleCloseMenu(); navigate(row.id); }} sx={menuItemStyle} >
                        <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
                        <ListItemText>Edit </ListItemText>
                    </MenuItem>
                    : <MenuItem onClick={() => { handleCloseMenu(); editRow(row) }} sx={menuItemStyle}>
                        <ListItemIcon><EditIcon fontSize="small" /></ListItemIcon>
                        <ListItemText>Edit </ListItemText>
                    </MenuItem>
                }
                <MenuDivider />
                <MenuItem onClick={() => { handleOpenDialog(); handleCloseMenu(); }}>
                    <ListItemIcon><DeleteIcon fontSize="small" color="error" /></ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontSize: 14, fontWeight: "bold", color: "#C62828" }}>Delete </ListItemText>
                </MenuItem>
            </Menu>
            <DeleteDialog open={openDialog} handleCloseDialog={handleCloseDialog} />
        </>
    );
}
