import StyledProfileButton from "./StyledProfileButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const ProfileBtn = ({ children, ...otherProps }) => {
    const editBtnStyle = {
        zIndex: 1,
        bottom: 8,
        position: "absolute",
    }
    const configButton = {
        ...otherProps,
        style: editBtnStyle,
    };
    const iconStyle = {
        mr: "-4px",
        ml: "-4px"
    }

    return <StyledProfileButton {...configButton} startIcon={<EditOutlinedIcon sx={iconStyle} />}>{children}</StyledProfileButton>;
};

export default ProfileBtn;
