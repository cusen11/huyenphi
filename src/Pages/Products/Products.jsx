import React from 'react';
import Title from '../../Components/Title/Title';
import Banner from '../../Assets/Images/banner-products.jpg'
import Slider from "react-slick";  
import { Grid } from '@material-ui/core';
import ImgItem from '../../Assets/Images/card-img.png';
import Card from '../../Components/Card/Card';
import ArrowBtn from '../../Assets/Images/arrow.png'; 
import NextArrow from '../../Assets/Images/arrow-right.png';
import PrevArrow from '../../Assets/Images/arrow-left.png'; 
import Arrow from '../../Components/Arrow/Arrow';
import ButtonPopup from '../../Components/Button/ButtonPopup';
function Products() {
    const settings = {
        dots: true,
        infinite: true, 
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,  
        speed: 500,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
    };
    const settings2 = {
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
            <Grid className='products'>
                <Slider {...settings}>
                    <img src={Banner} alt="banner" />
                    <img src={Banner} alt="banner" />
                    <img src={Banner} alt="banner" />
                    <img src={Banner} alt="banner" />
                    <img src={Banner} alt="banner" />
                </Slider>  
                <Grid className="products hp-w1300">
                    <Title title="S???n ph???m b??n ch???y"/>
                    <Grid className='slide-top'>
                        <Slider {...settings2}>
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                            <Card image={ImgItem} title="T???m tr???ng thu???c b???c" price="299.000??" />
                        </Slider>
                    </Grid>
                    <br/><br/><br/>
                    <Title title="T???t c??? s???n ph???m"/>
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
                    <Grid align='center'><ButtonPopup text='Xem th??m' icon={ArrowBtn} position='right down' /></Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Products;