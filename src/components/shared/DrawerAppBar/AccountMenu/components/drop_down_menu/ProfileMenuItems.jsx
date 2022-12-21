import { useContext } from "react";
import StyledLink from "./StyledLink";
import { Avatar } from "@mui/material";
import StyledMenuItem from "./StyledMenuItem";
import { useLocation } from "react-router-dom";
import { stringAvatar } from "../../../../../../helpers/stringToColor";
import { AuthContext } from "../../../../../../context/AuthContextProvider";

const profileLinks = (path, label) => {
    const pathLinks =
        path === "/profile/overview" ||
        path === "/profile/details" ||
        path === "/profile/picture" ||
        path === "/profile/security";
    return label === "My Profile" && pathLinks;
}

function ProfileMenuItems() {
    const { pathname } = useLocation();
    const { isAuth } = useContext(AuthContext);

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

    return (
        <>
            {profileItems.map(({ label, link, icon }) => {
                return profileLinks(pathname, label) ?
                    <StyledLink key={label} to={link}>
                        <StyledMenuItem selected> {icon} {label} </StyledMenuItem>
                    </StyledLink>
                    :
                    <StyledLink key={label} to={link}>
                        <StyledMenuItem > {icon} {label} </StyledMenuItem>
                    </StyledLink>
            })}
        </>
    );
}

export default ProfileMenuItems;
