import { useContext } from "react";
import { Box, Avatar } from "@mui/material";
import useImage from "../../../../../hooks/useImage";
import { AuthContext } from "../../../../../context/AuthContextProvider";
import EditAvatar from "../../../../../components/shared/ActionMenu/EditAvatar";
import ActionBtn from "../../../../../components/shared/FormsUI/Button/ActionBtn";
import FormHeading from "../../../../../components/shared/Typography/FormHeading";

function ProfilePictureForm() {
    const {isAuth} = useContext(AuthContext);
    const { image, handleChange } = useImage();
    const handleUpload = (evt) => {
        evt.preventDefault();
        const formData = new FormData();
        formData.append("avatar", image.raw);
        console.log(image.raw);
    };

    const avatarStyle = {
        width: "200px",
        height: "200px",
        aspectRatio: "auto 200 / 200",
    }

    return (
        <>
            <FormHeading title="Profile Picture" />
            <Box sx={{ position: "relative",  display: "flex", alignItems: "center", }}>
                <EditAvatar handleChange={handleChange} image={image} />
                <Box component="label">
                    {image.preview ?
                        <Avatar src={image.preview} style={avatarStyle} />
                        : <Avatar src={isAuth?.avatar} style={avatarStyle} />
                    }
                </Box>
            </Box>
            {image.preview ?
                <ActionBtn type="submit" name="upload" style={{ marginTop: "20px" }} onClick={handleUpload} >
                    Set new profile picture
                </ActionBtn>
                : null
            }
        </>
    );
}

export default ProfilePictureForm;
