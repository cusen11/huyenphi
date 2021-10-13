import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Menu from '../Menu/Menu';
import './Header.css';
import ButtonLink from '../Button/ButtonLink'; 
import ButtonPopup from '../Button/ButtonPopup';
import IconButton from '../../Assets/Images/arrow.png';
function Header() {
    return (
        <div className="header">
            <Menu/>
            <Grid className="header_hero-text">
                <Typography variant="h1">
                    <span className="text-1">Chăm sóc</span>
                    <span className="text-2">Làn da của bạn</span>
                    <span className="text-3">Là niềm hạnh phúc của </span>
                    <span className="text-4">Huyền Phi</span>
                </Typography>
                <ButtonLink text="NHẬN ƯU ĐÃI" link="link" position="left down" icon={IconButton}/>
                <ButtonPopup text="NHẬN ƯU ĐÃI" link="link" position="right up" icon={IconButton}/>
            </Grid>
        </div>
    );
}

export default Header;