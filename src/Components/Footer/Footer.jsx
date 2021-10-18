import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../../Assets/Images/facebook.png';
import Gplus from '../../Assets/Images/g+.png';
import Zalo from '../../Assets/Images/zalo.png';
import Instergram from '../../Assets/Images/instergram.png';
import Youtube from '../../Assets/Images/youtube.png';
import Phone from '../../Assets/Images/phone.png'; 
import './Footer.css'


function Footer() {
    return (
        <Grid className="footer">
            <Grid className='hp-w1300'>
                <Grid container justifyContent='space-between' alignItems='flex-start'>
                    <Grid item md={3}>
                        <Typography className='title' variant='h3'>Chính sách</Typography>
                        <ul className='fullwidth'>
                            <li><Link to='/'>Chính sách và quy định chung</Link></li>
                            <li><Link to='/'>Chính sách xử lý khiếu nại</Link></li>
                            <li><Link to='/'>Chính sách thanh toán</Link></li>
                            <li><Link to='/'>Chính sách đổi trả, hoàn tiền</Link></li>
                            <li><Link to='/'>Chính sách vận chuyển</Link></li> 
                        </ul>
                    </Grid>
                    <Grid item md={3}>
                        <Typography className='title' variant='h3'>Liên hệ</Typography>
                        <ul>
                            <li><a href="facebook.com" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="facebook" /></a></li>
                            <li><a href="facebook.com" target="_blank" rel="noopener noreferrer"><img src={Zalo} alt="zalo" /></a></li>
                            <li><a href="facebook.com" target="_blank" rel="noopener noreferrer"><img src={Phone} alt="phone" /></a></li>
                            <li><a href="facebook.com" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="Youtube" /></a></li>
                            <li><a href="facebook.com" target="_blank" rel="noopener noreferrer"><img src={Gplus} alt="G+" /></a></li>
                            <li><a href="facebook.com" target="_blank" rel="noopener noreferrer"><img src={Instergram} alt="instergram" /></a></li>
                        </ul>
                    </Grid>
                    <Grid item md={5}>
                        <Typography className='title' variant='h3'>Công ty TNHH Mỹ Phẩm Huyền Phi</Typography>
                        <Typography>GPKD số 0107835932 do Sở KH và ĐT TP Hà Nội cấp ngày 11/05/2017 – GĐ/Sở hữu website Hoàng Văn Hưng.</Typography>
                        <Typography>Địa Chỉ: Tầng 6, tòa nhà Sky City, 88 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Thành Phố Hà Nội.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Footer;