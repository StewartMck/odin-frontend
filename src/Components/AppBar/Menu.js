import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'
import {Link} from 'react-router-dom';

export default function NavMenu() {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div>
            <IconButton edge="start" color='inherit' onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                id="navMenu"
                anchorEl={anchorEl}
                // keepMounted
                transitionDuration={500}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link to='/'>Featured</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to='/about'>About</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <Link to='/news'>News</Link>
                </MenuItem>
            </Menu>
        </div>
    );
}