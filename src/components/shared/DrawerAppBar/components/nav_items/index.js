import { ListItemIcon } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

export const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard/overview",
    icon: <ListItemIcon><DashboardOutlinedIcon fontSize="small" /></ListItemIcon>
  },
  {
    label: "Stock",
    href: "/stock/default",
    icon: <ListItemIcon><WarehouseOutlinedIcon fontSize="small" /></ListItemIcon>
  },
  {
    label: "Part Entry",
    href: "/part-entry/default",
    icon: <ListItemIcon><AddShoppingCartOutlinedIcon fontSize="small" /></ListItemIcon>
  },
  {
    label: "Jobs",
    href: "/jobs/jobs-list",
    icon: <ListItemIcon><BusinessCenterOutlinedIcon fontSize="small" /></ListItemIcon>
  },
  {
    label: "Part Issue",
    href: "/part-issue/default",
    icon: <ListItemIcon><LocalGroceryStoreOutlinedIcon fontSize="small" /></ListItemIcon>
  },
  {
    label: "Hangar Use",
    href: "/hangar-use/default",
    icon: <ListItemIcon><StorefrontOutlinedIcon fontSize="small" /></ListItemIcon>
  },
];