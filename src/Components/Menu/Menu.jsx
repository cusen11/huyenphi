import { Grid } from '@material-ui/core';
import React from 'react';
import './menu.css';
import logo from '../../Assets/Images/logo.png'

function Menu() {
    return (
       <Grid className="menu-header-top">
           <Grid className="menu-header" container justifyContent='space-between'>
                <Grid className="item-menu-header" container item md={4} alignItems='center'>
                    <li align='center'>Trang chủ</li>
                    <li align='center'> Giới thiệu</li>
                </Grid>
                <Grid className="item-menu-header" item md={4} container justifyContent="flex-end" alignItems='center'>
                    <li align='center'>Tin tức</li>
                    <li align='center'> Liên hệ</li>
                </Grid>
            </Grid>
            <img src={logo} alt="logo huyền phi" />
       </Grid>
    );
}

export default Menu;