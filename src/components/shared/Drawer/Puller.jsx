import { Box } from "@mui/material";

function Puller() {
    const boxStyles = {
        top: 8,
        width: 30,
        height: 6,
        borderRadius: 3,
        position: "absolute",
        left: "calc(50% - 15px)",
        backgroundColor: "#e0e0e0",
    };

    return <Box sx={boxStyles} />;
}

export default Puller;
