import { Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import './menu.css';
import logo from '../../Assets/Images/logo.png'
import MenuIcon from '../../Assets/Images/menu-icon.png'
import { Link } from 'react-router-dom';

function Menu() {
    const [isActive,setIsActive] = useState(false)
    return (
       <Grid className="menu-header-top">
           <Grid className={isActive ? "menu-header active" : "menu-header"} container justifyContent='space-between'>
                <Grid className="item-menu-header" container item md={4} alignItems='center'>
                    <li align='center'><Link to='/'>Trang chủ</Link></li>
                    <li align='center'><Link to='/about'>Giới thiệu</Link></li>
                </Grid>
                <Grid className="item-menu-header" item md={4} container justifyContent="flex-end" alignItems='center'>
                    <li align='center'><Link to='/news'>Tin tức</Link></li>
                    <li align='center'><Link to='/products'>Sản phẩm</Link></li>
                </Grid>
            </Grid>
            <Link to='/' className='logo'><img src={logo} alt="logo huyền phi" /></Link>
            <Button onClick={()=>setIsActive(!isActive)}><img src={MenuIcon} alt="menu" /></Button>
       </Grid>
    );
}

export default Menu;