import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import NavMenu from './Menu'
import AnimalCounter from './AnimalCounter'


export default function AppBar() {

    return (
        <div className="appbar">
            <Appbar position="static">
                <Toolbar className='toolbar'>
                   <NavMenu/>
                    <h3>ODIN</h3>
                    <AnimalCounter/>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </Appbar>
        </div>
    );
}