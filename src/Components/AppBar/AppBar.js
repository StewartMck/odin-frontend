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
                    <div className="counter-adopt">
                    <AnimalCounter/>
                    <Button color='inherit'>
                    <img src='https://exoffender.org/wp-content/uploads/2017/09/donate-icon.png'/>
                        </Button>
                    </div>
                </Toolbar>
            </Appbar>
        </div>
    );
}