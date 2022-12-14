import { useState, Fragment, useContext } from "react";
import AppBarAvatar from "./components/app_bar_avatar";
import DropDownMenu from "./components/drop_down_menu";
import { ThemeContext } from "../../../../context/ThemeContextProvider";

export default function AccountMenu() {
    const { theme } = useContext(ThemeContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <Fragment>
            <AppBarAvatar open={open} handleClick={handleClick} theme={theme} />
            <DropDownMenu anchorEl={anchorEl} open={open} handleClose={handleClose} theme={theme} />
        </Fragment>
    );
}
