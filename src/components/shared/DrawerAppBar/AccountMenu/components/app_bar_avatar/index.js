import { useContext } from "react";
import { stringAvatar } from "../../../../../../assets/js/scripts";
import { AuthContext } from "../../../../../../context/AuthContextProvider";
import { Box, Typography, Tooltip, IconButton, Avatar } from "@mui/material"

function AppBarAvatar(props) {
    const { isAuth } = useContext(AuthContext);
    const { handleClick, open, theme } = props;
    const typographyStyle = {
        ml: 1,
        fontSize: "14px",
        display: { xs: "none", sm: "block", },
        color: theme === "light" ? "#ede7f6" : "#c9d1d9",
    }

    return (
        <Box sx={{ display: "flex", alignItems: "center", textAlign: "center", flexGrow: 0 }}>
            <Typography sx={typographyStyle}>{isAuth?.firstName}</Typography>
            <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 0 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined} >
                    <Avatar src={isAuth?.avatar} {...stringAvatar(isAuth.firstName + " " + isAuth.lastName)} />
                </IconButton>
            </Tooltip>
        </Box>
    )
}

export default AppBarAvatar;