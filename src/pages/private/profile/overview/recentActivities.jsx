import { useContext } from "react";
import Activities from './tables/activities';
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { ThemeContext } from "../../../../context/ThemeContextProvider";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";

function RecentActivities(props) {
    const { theme } = useContext(ThemeContext);

    const cardStyle = {
        borderRadius: "4px",
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        border: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    };

    const defaultProps = {
        sx: cardStyle,
        variant: "outlined",
    }

    const titleTypoProps = {
        fontSize: "16px",
        fontWeight: "600",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    }

    const iconStyle = {
        color: theme === "light" ? "#57606a" : "#8b949e",
    }

    return (
        <>
            <Card {...defaultProps} >
                <CardHeader title="Recent Activities" sx={{ pt: 1, pb: 1 }}
                    titleTypographyProps={titleTypoProps} 
                    action={<IconButton aria-label="settings" > <MoreVertOutlinedIcon sx={iconStyle} /> </IconButton>}/>
                <CardContent sx={{ mt:"-15px", maxHeight: "350px" }}>
                    <Activities />
                    
                </CardContent>
            </Card>
        </>
    );
};
export default RecentActivities;
