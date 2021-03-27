import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function AppBar() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Appbar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color='inherit' aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <h3 className={classes.title}>ODIN</h3>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </Appbar>
        </div>
    );
}