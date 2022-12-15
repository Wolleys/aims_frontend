import { Tabs } from "@mui/material";

function StyledTabs({ ...props }) {
    const tabIndicatorStyle = {
        display: "none",
    };

    const defaultTabsProps = {
        scrollButtons: "auto",
        variant: "scrollable",
        TabIndicatorProps: {
            sx: tabIndicatorStyle,
        },
    };
    
    return <Tabs {...props} {...defaultTabsProps} />;
}

export default StyledTabs;
