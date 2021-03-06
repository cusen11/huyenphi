import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './Homepage.css';
import Header from '../../Components/Header/Header';
import ImgAbout from '../../Assets/Images/about.png';
import ImgMedia1 from '../../Assets/Images/media-01.png';
import ImgMedia2 from '../../Assets/Images/media-02.png';
import ImgMedia3 from '../../Assets/Images/media-03.png';
import ImgMedia4 from '../../Assets/Images/media-04.png';
import ImgMedia5 from '../../Assets/Images/media-05.png';
import ImgMedia6 from '../../Assets/Images/media-06.png';
import ImgMedia7 from '../../Assets/Images/media-07.png';
import ImgMedia8 from '../../Assets/Images/media-08.png';
import ImgMedia9 from '../../Assets/Images/media-09.png';
import ArrowBtn from '../../Assets/Images/arrow.png';
import StartIMG from '../../Assets/Images/start.png';
import ImgItem from '../../Assets/Images/card-img.png';
import NextArrow from '../../Assets/Images/arrow-right.png';
import PrevArrow from '../../Assets/Images/arrow-left.png'; 
import Title from '../../Components/Title/Title';
import Arrow from '../../Components/Arrow/Arrow';
import Card from '../../Components/Card/Card';
import Slider from "react-slick";
import ButtonLink from '../../Components/Button/ButtonLink' 
function Homepage() {
    const settings = {
        dots: true,
        infinite: true, 
        slidesToShow: 4,
        slidesToScroll: 1, 
        nextArrow: <Arrow img={NextArrow} left={false} />,
        prevArrow: <Arrow img={PrevArrow} left={true}/>,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3, 
                nextArrow: false,
                prevArrow: false, 
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                nextArrow: false,
                prevArrow: false, 
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow: false,
                prevArrow: false, 
              }
            }
          ]
    };
    return (
        <>
            <Header/>
            <Grid className="home-page">
                <Grid className="about" container justifyContent="space-between">
                    <Grid item className="content" md={9}>
                        <Typography variant='h2'>Huy???n Phi Comestic</Typography>
                        <Typography>
                            Ng??y h??m nay, Huy???n Phi ???? ?????ng v???ng tr??n th??? tr?????ng m??? ph???m trong n?????c v???i h??n 8.000 ?????i l?? tr???i d??i kh???p to??n qu???c v???i s??? m???nh g??p ph???n mang n??t ?????p t???i cho m???i ph??? n??? Vi???t.
                            Huy???n Phi c???a ng??y mai s??? c??n l???n m???nh h??n th??? n???a??? nh??ng c??ng to l???n bao nhi??u th?? s??? c??ng ch??m ch??t kh??ch h??ng ch??n th??nh b???y nhi??u t??? nh???ng ??i???u nh??? nh???t nh???t.
                            N??? c?????i c???a b???n l?? ni???m h???nh ph??c c???a Huy???n Phi.<br/>
                            N??i Huy???n Phi thu???c v??? kh??ng ??? ????u xa x??i m?? ngay trong tr??i tim b???n.
                        </Typography>
                        <Grid item className="image">
                            <img src={ImgAbout} alt="Huy???n Phi Comestic" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="news hp-w1300">
                    <Title title="M???o l??m ?????p"/>
                    <Grid className='slide-top'>
                        <Slider {...settings}>
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c"/>
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c"/>
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c"/>
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c"/>
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c"/>
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c"/>
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c"/>
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c"/>
                        </Slider> 
                    </Grid> 
                </Grid>
                <Grid className="reason hp-w1300">
                    <Title title="Huy???n Phi l?? do b???n n??n l???a ch???n"/>
                    <Grid container justifyContent='space-between' alignItems="flex-start" spacing={2}>
                        <Grid item md={3} xs={6} align='center'>
                            <img src={StartIMG} alt="start" />
                            <Typography> Th??nh ph???n s???n ph???m ???????c chi???t xu???t ch??? y???u t??? c??c d?????c li???u c?? ngu???n g???c thi??n nhi??n</Typography>
                        </Grid>
                        <Grid item md={3} xs={6} align='center'>
                            <img src={StartIMG} alt="start" />
                            <Typography align='center'> S???n ph???m an to??n cho m???i lo???i da, t??? da kh??, da d???u, da h???n h???p cho t???i da nh???y c???m</Typography>
                        </Grid>
                        <Grid item md={3} xs={6} align='center'>
                            <img src={StartIMG} alt="start" />
                            <Typography align='center'> S???n ph???m ???? ???????c S??? Y T??? ch???ng nh???n v?? c???p ph??p tr??n th??? tr?????ng </Typography>
                        </Grid>
                        <Grid item md={3} xs={6} align='center'>
                            <img src={StartIMG} alt="start" />
                            <Typography align='center'> MI???N PH?? SHIP ?????i v???i t???t c??? ????n h??ng tr??n to??n qu???c.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="products hp-w1300">
                    <Title title="S???n ph???m"/>
                    <Grid container justifyContent='space-between' alignItems="flex-start" spacing={2}>
                        <Grid item md={3} xs={6}>
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                        </Grid>
                        <Grid item md={3} xs={6}> 
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                        </Grid>
                        <Grid item md={3} xs={6}> 
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                        </Grid>
                        <Grid item md={3} xs={6}> 
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                        </Grid>
                        <Grid item md={3} xs={6}> 
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                        </Grid>
                        <Grid item md={3} xs={6}> 
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                        </Grid>
                        <Grid item md={3} xs={6}> 
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                        </Grid>
                        <Grid item md={3} xs={6}> 
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" /> 
                        </Grid>
                    </Grid>
                    <Grid align='right'><ButtonLink text='Xem th??m' icon={ArrowBtn} position='right' link='/products'/></Grid>
                </Grid>
                <Grid className="media hp-w1300">
                    <Title title="Th?? vi???n"/>
                    <Grid container justifyContent='space-between' alignItems="flex-start" spacing={2}>
                        <Grid item md={4} xs={6}>
                            <img src={ImgMedia1} alt='media' />
                        </Grid>
                        <Grid item md={4} xs={6}> 
                            <img src={ImgMedia2} alt='media' />
                        </Grid>
                        <Grid item md={4} xs={6}> 
                            <img src={ImgMedia3} alt='media' />
                        </Grid>
                        <Grid item md={4} xs={6}> 
                            <img src={ImgMedia4} alt='media' />
                        </Grid>
                        <Grid item md={4} xs={6}> 
                            <img src={ImgMedia5} alt='media' />
                        </Grid>
                        <Grid item md={4} xs={6}> 
                            <img src={ImgMedia6} alt='media' />
                        </Grid>
                        <Grid item md={4} xs={6}> 
                            <img src={ImgMedia7} alt='media' />
                        </Grid>
                        <Grid item md={4} xs={6}> 
                            <img src={ImgMedia8} alt='media' /> 
                        </Grid>
                        <Grid item md={4} xs={6}> 
                            <img src={ImgMedia9} alt='media' /> 
                        </Grid>
                    </Grid>
                    <Grid align='right'><ButtonLink text='Xem th??m' icon={ArrowBtn} position='right' link='/media'/></Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Homepage;