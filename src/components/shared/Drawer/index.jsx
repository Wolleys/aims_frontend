import { useState } from "react";
import { Global } from "@emotion/react";
import { grey } from "@mui/material/colors";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import {
    styled,
    CssBaseline,
    Box,
    Typography,
    SwipeableDrawer,
    Fab,
} from "@mui/material";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
        theme.palette.mode === "light"
            ? grey[100]
            : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "light" ? "#FAFAFA" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    top: 8,
    width: 30,
    height: 6,
    borderRadius: 3,
    position: "absolute",
    left: "calc(50% - 15px)",
    backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
}));

const StyledFab = styled(Fab)({
    left: 0,
    zIndex: 100,
    top: "9.2rem",
    right: "-78%",
    margin: "0 auto",
    position: "absolute",
    backgroundColor: "#5046e4",
});

function SwipeableEdgeDrawer(props) {
    const { content } = props;
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        height: `calc(80% - ${drawerBleeding}px)`,
                        overflow: "visible",
                    },
                }}
            />
            <Box sx={{ textAlign: "center", pt: 1 }}>
                <StyledFab
                    sx={{ right: { sm: 0 } }}
                    color="primary"
                    size="small"
                    onClick={toggleDrawer(true)}
                >
                    <BusinessCenterIcon />
                </StyledFab>
            </Box>
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        position: "absolute",
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: "visible",
                        right: 0,
                        left: 0,
                        display: { xs: "grid", sm: "grid", md: "none" },
                    }}
                >
                    <Puller />
                    <Typography sx={{ p: 2, color: "text.secondary" }}>
                        Jobs List
                    </Typography>
                </StyledBox>
                <StyledBox sx={{ px: 2, pb: 2, height: "100%", overflow: "auto" }}>
                    {content}
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

export default SwipeableEdgeDrawer;
