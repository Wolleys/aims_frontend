import { useState, Fragment, useContext } from 'react';
import AppBarAvatar from './components/app_bar_avatar';
import DropDownMenu from './components/drop_down_menu';
import { AuthContext } from "../../../../context/AuthContextProvider";

export default function AccountMenu() {
    const { isAuth } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <Fragment>
            <AppBarAvatar open={open} handleClick={handleClick} isAuth={isAuth} />
            <DropDownMenu anchorEl={anchorEl} open={open} handleClose={handleClose} isAuth={isAuth} />
        </Fragment>
    );
}
