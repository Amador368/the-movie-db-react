import React from 'react';
import Typography from '@material-ui/core/Typography';
import './header.css';
import {ReactComponent as Logo} from './logo.svg'

export default function Header(){
    return (
        <div>
            <Logo className="header__logo"></Logo>
        </div>
        
    )
}