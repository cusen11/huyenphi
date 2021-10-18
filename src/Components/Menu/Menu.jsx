import { Grid } from '@material-ui/core';
import React from 'react';
import './menu.css';
import logo from '../../Assets/Images/logo.png'
import { Link } from 'react-router-dom';

function Menu() {
    return (
       <Grid className="menu-header-top">
           <Grid className="menu-header" container justifyContent='space-between'>
                <Grid className="item-menu-header" container item md={4} alignItems='center'>
                    <li align='center'><Link to='/'>Trang chủ</Link></li>
                    <li align='center'><Link to='/about'>Giới thiệu</Link></li>
                </Grid>
                <Grid className="item-menu-header" item md={4} container justifyContent="flex-end" alignItems='center'>
                    <li align='center'><Link to='/news'>Tin tức</Link></li>
                    <li align='center'><Link to='/products'>Sản phẩm</Link></li>
                </Grid>
            </Grid>
            <Link to='/'><img src={logo} alt="logo huyền phi" /></Link>
       </Grid>
    );
}

export default Menu;