import { useContext, useState } from "react";
import ProfileBtn from "../FormsUI/Button/ProfileBtn";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { Menu, MenuItem, ListItemIcon, ListItemText } from "@mui/material";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

export default function EditAvatar(props) {
  const { handleChange } = props;
  const { theme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => { setAnchorEl(event.currentTarget) };
  const handleClose = () => { setAnchorEl(null) };

  const menuStyle = {
    mt: 1.3,
    overflow: "visible",
    "&:before": {
      content: '""', display: "block", position: "absolute", top: 0, left: 10, width: 10,
      height: 10, transform: "translateY(-50%) rotate(45deg)", zIndex: 0,
      bgcolor: theme === "light" ? "background.paper" : "#161B22",
      borderLeft: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
      borderTop: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    },
    backgroundColor: theme === "light" ? "#ffffff" : "#161B22",
    border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
  }

  const menuItemStyle = {
    "& .MuiListItemText-primary": {
      ml: "-20px",
      fontSize: "14px",
      color: theme === "light" ? "#24292f" : "#c9d1d9",
    },
    "& .MuiSvgIcon-root": {
      ml: "-8px",
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

  const defaultProps = {
    open: open,
    elevation: 0,
    anchorEl: anchorEl,
    onClose: handleClose,
    PaperProps: {
      sx: menuStyle
    },
  };

  return (
    <>
      <ProfileBtn onClick={handleClick} > Edit </ProfileBtn>
      <Menu {...defaultProps}>
        <MenuItem sx={menuItemStyle} component="label">
          <input type="file" name="avatar" accept="image/*" id="upload-button"
            hidden onChange={handleChange} />
          <ListItemIcon><PhotoCameraOutlinedIcon fontSize="small" /></ListItemIcon>
          <ListItemText> Upload a photo </ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={menuItemStyle}>
          <ListItemIcon><DeleteOutlineOutlinedIcon fontSize="small" /></ListItemIcon>
          <ListItemText> Remove photo </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}