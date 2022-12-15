import Puller from "./Puller";
import StyledBox from "./StyledBox";
import { Global } from "@emotion/react";
import { useState, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContextProvider";
import { styled, CssBaseline, Typography, SwipeableDrawer } from "@mui/material";

const drawerBleeding = 56;
const Root = styled("div")(() => ({
    height: "100%",
}));

function SwipeableEdgeDrawer(props) {
    const { theme } = useContext(ThemeContext);
    const { content, title } = props;
    const [open, setOpen] = useState(false);

    const titleTypoProps = {
        p: 2,
        fontWeight: 600,
        opacity: open ? 0 : 1,
        borderRadius: "4px 4px 0 0",
        color: theme === "light" ? "#24292f" : "#c9d1d9",
    };

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const titleStyledBox = {
        left: 0,
        right: 0,
        top: -drawerBleeding,
        position: "absolute",
        visibility: "visible",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        display: { xs: "grid", sm: "grid", md: "none" }
    }

    const contentStyledBox = {
        px: 2, pb: 2, height: "100%", overflow: "auto",
    }

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
                <StyledBox sx={titleStyledBox}>
                    <Puller />
                    <Typography sx={titleTypoProps}>{title}</Typography>
                </StyledBox>
                <StyledBox sx={contentStyledBox}> {content} </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

export default SwipeableEdgeDrawer;
