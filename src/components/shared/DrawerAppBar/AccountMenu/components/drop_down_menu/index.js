import ThemeSwitcher from "./ThemeSwitcher";
import StyledMenuItem from "./StyledMenuItem";
import { useNavigate } from "react-router-dom";
import ProfileMenuItems from "./ProfileMenuItems";
import { Logout } from "../../../../../../queries";
import { Menu, ListItemIcon } from "@mui/material";
import SettingsMenuItems from "./SettingsMenuItems";
import MenuDivider from "../../../../Divider/menuDivider";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function DropDownMenu(props) {
    const navigate = useNavigate();
    const { anchorEl, open, handleClose, theme } = props;
    const { mutateAsync } = Logout();

    const handleLogOut = async () => {
        await mutateAsync();
        navigate("/");
    }

    const paperStyles = {
        mt: 1.5,
        overflow: "visible",
        "& .MuiAvatar-root": {
            width: 32, height: 32, ml: -0.5, mr: 1,
        },
        "&:before": {
            content: '""', display: "block", position: "absolute", top: 0, right: 14, width: 10,
            height: 10, transform: "translateY(-50%) rotate(45deg)", zIndex: 0,
            bgcolor: theme === "light" ? "background.paper" : "#161B22",
            borderLeft: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
            borderTop: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
        },
        backgroundColor: theme === "light" ? "background.paper" : "#161B22",
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    }

    const defaultProps = {
        open: open,
        anchorEl: anchorEl,
        onClose: handleClose,
        onClick: handleClose,
        PaperProps: {
            elevation: 0,
            sx: paperStyles
        },
        transformOrigin: { horizontal: "right", vertical: "top" },
        anchorOrigin: { horizontal: "right", vertical: "bottom" }
    }

    return (
        <Menu {...defaultProps} >
            <ProfileMenuItems />
            <MenuDivider />
            <ThemeSwitcher />
            <SettingsMenuItems />
            <StyledMenuItem onClick={handleLogOut}>
                <ListItemIcon> <LogoutOutlinedIcon fontSize="small" /> </ListItemIcon>
                Logout
            </StyledMenuItem>
        </Menu>
    )
}

export default DropDownMenu;