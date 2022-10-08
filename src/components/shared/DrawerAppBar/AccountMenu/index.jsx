import { useState, Fragment } from 'react';
import AppBarAvatar from './components/app_bar_avatar';
import DropDownMenu from './components/drop_down_menu';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return (
        <Fragment>
            <AppBarAvatar open={open} handleClick={handleClick} />
            <DropDownMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
        </Fragment>
    );
}
