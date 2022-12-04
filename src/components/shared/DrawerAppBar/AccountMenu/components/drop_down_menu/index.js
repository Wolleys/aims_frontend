import { Logout } from "../../../../../../queries";
import { Link, useNavigate } from "react-router-dom";
import { stringAvatar } from "../../../../../../assets/js/scripts";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Avatar, Menu, ListItemIcon, Divider, MenuItem } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

function DropDownMenu(props) {
    const navigate = useNavigate();
    const { anchorEl, open, handleClose, isAuth, theme } = props;
    const { mutateAsync } = Logout();

    const handleLogOut = async () => {
        await mutateAsync();
        navigate("/");
    }

    const linkStyle = {
        color: "inherit",
        textDecoration: "none",
    }

    const menuItemStyle = {
        fontSize: "14px",
        color: theme === "light" ? "#444" : "#c9d1d9",
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

    const profileItems = [
        { label: "My Profile", link: "/profile/overview", icon: <Avatar {...stringAvatar(isAuth.firstName + " " + isAuth.lastName)} /> },
        { label: "Account Settings", link: "/account-settings", icon: <Avatar src={isAuth?.avatar} /> },
    ];

    const settingsItems = [
        {
            label: "Access Management", link: "/access-management/users",
            icon: <ListItemIcon> <AdminPanelSettingsOutlinedIcon fontSize="small" /> </ListItemIcon>
        },
        {
            label: "System Setup", link: "/setup/clients",
            icon: <ListItemIcon> <SettingsOutlinedIcon fontSize="small" /> </ListItemIcon>
        },
    ];

    return (
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} onClick={handleClose}
            PaperProps={{
                elevation: 0, sx: {
                    overflow: "visible", filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5, "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1, },
                    "&:before": {
                        content: '""', display: "block", position: "absolute", top: 0, right: 14, width: 10,
                        height: 10, transform: "translateY(-50%) rotate(45deg)", zIndex: 0,
                        bgcolor: theme === "light" ? "background.paper" : "#161B22",
                        borderLeft: theme === "light" ? "none" : "1px solid #30363d",
                        borderTop: theme === "light" ? "none" : "1px solid #30363d",
                    },
                    backgroundColor: theme === "light" ? "background.paper" : "#161B22",
                    border: theme === "light" ? "none" : "1px solid #30363d"
                },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
            {profileItems.map((item) => (
                <Link key={item.label} to={item.link} style={linkStyle}>
                    <MenuItem sx={menuItemStyle}>
                        {item.icon} {item.label}
                    </MenuItem>
                </Link>
            ))}
            <Divider sx={{ borderBottom: theme === "light" ? "thin solid #0000001f" : "thin solid #30363d" }} />
            {settingsItems.map((item) => (
                <Link key={item.label} to={item.link} style={linkStyle}>
                    <MenuItem sx={menuItemStyle}>
                        {item.icon} {item.label}
                    </MenuItem>
                </Link>
            ))}
            <MenuItem onClick={handleLogOut} sx={menuItemStyle}>
                <ListItemIcon> <LogoutOutlinedIcon fontSize="small" /> </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    )
}

export default DropDownMenu;