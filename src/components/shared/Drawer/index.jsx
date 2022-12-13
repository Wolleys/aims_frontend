import { Global } from "@emotion/react";
import { grey } from "@mui/material/colors";
import { useState, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { styled, CssBaseline, Box, Typography, SwipeableDrawer, Fab } from "@mui/material";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
        theme.palette.mode === "light"
            ? grey[100]
            : theme.palette.background.default,
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

function SwipeableEdgeDrawer(props) {
    const { theme } = useContext(ThemeContext);
    const { content, title, style1, icon } = props;
    const [open, setOpen] = useState(false);

    const defaultStyles = {
        left: 0,
        zIndex: 100,
        margin: "0 auto",
        boxShadow: "none",
        position: "absolute",
        color: theme === "light" ? "#fff" : "#c9d1d9",
        backgroundColor: theme === "light" ? "#5046e4" : "#21262d",
        border: theme === "light" ? "1px solid #5046e4" : "1px solid #f0f6fc1a",
    };

    const JobCardDrawer = styled(Fab)({
        top: "4.4rem",
        right: "-78%",
    });

    const JobsListDrawer = styled(Fab)({
        top: "9.7rem",
        right: "-70%",
    });

    const StyledBox = styled(Box)({
        backgroundColor: theme === "light" ? "#FAFAFA" : "#0d1117",
        borderTop: theme === "light" ? "1px solid #d0d7de" : "1px solid #30363d",
    });

    const titleTypoProps = {
        p: 2,
        borderRadius: "4px 4px 0 0",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    };

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const dafaultfabProps = {
        size: "small",
        onClick: toggleDrawer(true),
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
                {style1 ? (
                    <JobCardDrawer
                        {...dafaultfabProps}
                        sx={{ right: { sm: 0 }, mt: { sm: 1 }, ...defaultStyles }}
                    >
                        {icon}
                    </JobCardDrawer>
                ) : (
                    <JobsListDrawer
                        {...dafaultfabProps}
                        sx={{ right: { sm: 0 }, ...defaultStyles }}
                    >
                        {icon}
                    </JobsListDrawer>
                )}
            </Box>
            <SwipeableDrawer
                open={open}
                anchor="bottom"
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    sx={{
                        left: 0,
                        right: 0,
                        top: -drawerBleeding,
                        position: "absolute",
                        visibility: "visible",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        display: { xs: "grid", sm: "grid", md: "none" },
                    }}
                >
                    <Puller />
                    <Typography sx={titleTypoProps}>{title}</Typography>
                </StyledBox>
                <StyledBox sx={{ px: 2, pb: 2, height: "100%", overflow: "auto" }}>
                    {content}
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

export default SwipeableEdgeDrawer;
