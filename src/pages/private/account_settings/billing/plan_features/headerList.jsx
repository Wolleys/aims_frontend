import AdbIcon from "@mui/icons-material/Adb";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

function HeaderList({ theme }) {
    const listStyles = {
        width: "100%",
        pt: 0.5, pb: 0.5,
        borderRadius: "4px 4px 0 0",
        bgcolor: theme === "light" ? "#f6f8fa" : "#161b22",
        borderBottom: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    }
    const avatarStyles = {
        width: "32px",
        height: "32px",
        bgcolor: theme === "light" ? "#24292f" : "#c9d1d9",
    }
    const iconStyles = {
        color: theme === "light" ? "#f6f8fa" : "#161b22",
    }
    const primaryTypoProps = {
        ml: -1.5,
        fontSize: 14,
        lineHeight: 1.5,
        fontWeight: 600,
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }
    const secondaryTypoProps = {
        ml: -1.5,
        fontSize: 12,
        lineHeight: 1.5,
        fontWeight: 400,
        color: theme === "light" ? "#57606a" : "#8b949e",
    }

    return (
        <List sx={listStyles}>
            <ListItem sx={{ pt: 0, pb: 0 }}>
                <ListItemAvatar>
                    <Avatar sx={avatarStyles}>
                        <AdbIcon fontSize="small" sx={iconStyles} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary="AIMS Freemium"
                    secondary="Everything in the freemium plan"
                    primaryTypographyProps={primaryTypoProps}
                    secondaryTypographyProps={secondaryTypoProps}
                />
            </ListItem>
        </List>
    );
}

export default HeaderList;
