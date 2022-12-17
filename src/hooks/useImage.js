import { useState } from "react";

function useImage() {
    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = (e) => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
            });
        }
    };

    return { image, handleChange };
}

export default useImage;
