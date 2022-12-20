import StyledLink from "./StyledLink";
import StyledMenuItem from "./StyledMenuItem";
import { ListItemIcon } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

function SettingsMenuItems() {
  const navItems = [
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
    <>
      {navItems.map((item) => (
        <StyledLink key={item.label} to={item.link}>
          <StyledMenuItem> {item.icon} {item.label} </StyledMenuItem>
        </StyledLink>
      ))}
    </>
  );
}

export default SettingsMenuItems;
