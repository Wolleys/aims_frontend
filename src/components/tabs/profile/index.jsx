import Layout from "../Layout";
import StyledTab from "../StyledTab";
import StyledTabs from "../StyledTabs";
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
        <Layout>
            <StyledTabs value={activeItem?.label} >
                {navItems.map((item) => (
                    <StyledTab key={item.label} value={item.label} to={item.path}
                        label={<span><item.icon /><br />{item.label}</span>} />
                ))}
            </StyledTabs>
        </Layout>
    );
}