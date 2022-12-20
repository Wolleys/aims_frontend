import { useContext } from "react";
import StyledLink from "./StyledLink";
import { Avatar } from "@mui/material";
import StyledMenuItem from "./StyledMenuItem";
import { useLocation } from "react-router-dom";
import { stringAvatar } from "../../../../../../assets/js/scripts";
import { AuthContext } from "../../../../../../context/AuthContextProvider";

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

    const pathLinks =
        pathname === "/profile/overview" ||
        pathname === "/profile/details" ||
        pathname === "/profile/picture" ||
        pathname === "/profile/security";

    return (
        <>
            {profileItems.map(({ label, link, icon }) => {
                return label === "My Profile" && pathLinks ?
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
