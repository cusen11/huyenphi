import { Grid, Typography } from '@material-ui/core';
import React from 'react'; 
import './Header.css'; 
import ButtonPopup from '../Button/ButtonPopup';
import IconButton from '../../Assets/Images/arrow.png';
function Header() {
    return (
        <div className="header"> 
            <Grid container className="header_hero" justifyContent="flex-start" alignItems="center">
                <Grid item className="header_hero-text">
                    <Typography variant="h1">
                        <span className="text-1">Chăm sóc</span>
                        <span className="text-2">Làn da của bạn</span>
                        <span className="text-3">Là niềm hạnh phúc của </span>
                        <span className="text-4">Huyền Phi</span>
                    </Typography>
                    <Typography variant="h4">Liên hệ ngay với Huyền Phi<br/> để được nhận ưu đãi</Typography> 
                    <ButtonPopup text="NHẬN ƯU ĐÃI" link="link" position="right" icon={IconButton}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Header;