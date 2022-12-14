import { NavLink } from "react-router-dom";
import { Box, Tabs, Tab, Container } from "@mui/material";
import useCurrentPath from "../../../hooks/useCurrentPath";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";

const navItems = [
    { path: "/profile/overview", label: "Overview", icon: PersonPinCircleOutlinedIcon },
    { path: "/profile/details", label: "Company Details", icon: VerifiedUserOutlinedIcon },
    { path: "/profile/picture", label: "Profile Picture", icon: PhotoCameraOutlinedIcon },
    { path: "/profile/security", label: "Security", icon: LockOutlinedIcon },
];

export default function ProfileTabs() {
    const activeItem = useCurrentPath(navItems);

    return (
        <Container maxWidth="fixed">
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Tabs value={activeItem?.label} variant="scrollable" scrollButtons="auto"
                    TabIndicatorProps={{ style: { display: "none", top: "60px" } }}>
                    {navItems.map((item) => (
                        <Tab key={item.label} value={item.label} component={NavLink} to={item.path}
                            label={<span><item.icon /><br />{item.label}</span>} sx={{ textTransform: "none", }} wrapped />
                    ))}
                </Tabs>
            </Box>
        </Container>
    );
}