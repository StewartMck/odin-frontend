import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function AppBar() {

    return (
        <div className="appbar">
            <Appbar position="static">
                <Toolbar className='toolbar'>
                    <IconButton edge="start" color='inherit' aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <h3>ODIN</h3>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </Appbar>
        </div>
    );
}