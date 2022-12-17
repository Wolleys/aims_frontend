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

    return <StyledProfileButton {...configButton} startIcon={<EditOutlinedIcon />}>{children}</StyledProfileButton>;
};

export default ProfileBtn;
