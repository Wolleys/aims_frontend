import StyledMenuItem from "./StyledMenuItem";
import { Logout } from "../../../../../../queries";
import MenuDivider from "../../../../Divider/menuDivider";
import { Avatar, Menu, ListItemIcon } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { stringAvatar } from "../../../../../../assets/js/scripts";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

function DropDownMenu(props) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { anchorEl, open, handleClose, isAuth, theme, toggleTheme } = props;
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

    const linkStyle = {
        color: "inherit",
        textDecoration: "none",
    }

    const profileItems = [
        {
            label: "My Profile", link: "/profile/overview",
            icon: <Avatar {...stringAvatar(isAuth.firstName + " " + isAuth.lastName)} />
        },
        {
            label: "Account Settings", link: "/account-settings",
            icon: <Avatar src={isAuth?.avatar} />,
        },
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

    const pathLinks =
        pathname === "/profile/overview" ||
        pathname === "/profile/details" ||
        pathname === "/profile/picture" ||
        pathname === "/profile/security";

    return (
        <Menu {...defaultProps} >
            {profileItems.map(({ label, link, icon }) => {
                return label === "My Profile" && pathLinks ?
                <Link key={label} to={link} style={linkStyle}>
                    <StyledMenuItem selected> {icon} {label} </StyledMenuItem>
                </Link>
                :
                <Link key={label} to={link} style={linkStyle}>
                    <StyledMenuItem > {icon} {label} </StyledMenuItem>
                </Link>
            })}
            <MenuDivider />
            <StyledMenuItem>
                <ListItemIcon>
                    {theme === "light" ? <DarkModeOutlinedIcon fontSize="small" /> : <LightModeOutlinedIcon fontSize="small" />}
                </ListItemIcon>
                <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} id="mode" style={{ display: "none" }} />
                <label htmlFor="mode" style={{ cursor: "pointer" }}>
                    {theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                </label>
            </StyledMenuItem>
            {settingsItems.map((item) => (
                <Link key={item.label} to={item.link} style={linkStyle}>
                    <StyledMenuItem>
                        {item.icon} {item.label}
                    </StyledMenuItem>
                </Link>
            ))}
            <StyledMenuItem onClick={handleLogOut}>
                <ListItemIcon> <LogoutOutlinedIcon fontSize="small" /> </ListItemIcon>
                Logout
            </StyledMenuItem>
        </Menu>
    )
}

export default DropDownMenu;