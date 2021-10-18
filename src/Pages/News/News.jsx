import { Grid } from '@material-ui/core';
import React from 'react';
import Title from '../../Components/Title/Title';
import Slider from "react-slick"; 
import Banner from '../../Assets/Images/banner-products.jpg'
import Card from '../../Components/Card/Card';
import ImgItem from '../../Assets/Images/card-img.png';
import ButtonPopup from '../../Components/Button/ButtonPopup';
import ArrowBtn from '../../Assets/Images/arrow.png'; 

function News() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,  
    };
    return (
        <>
            <Grid className='news'> 
                <Slider {...settings}>
                    <img src={Banner} alt="banner" />
                    <img src={Banner} alt="banner" />
                    <img src={Banner} alt="banner" />
                    <img src={Banner} alt="banner" />
                    <img src={Banner} alt="banner" />
                </Slider> 
                <Grid className="hp-w1300">
                    <Title title="Tin tổng hợp"/>
                    <Grid container justifyContent='space-between' alignItems="flex-start" spacing={4}>
                        <Grid item md={2}>
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" /> 
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" /> 
                        </Grid> 
                    </Grid>
                    <Grid align='right'>
                        <ButtonPopup text='Trở lại' icon={ArrowBtn} position='left' />
                        <ButtonPopup text='Xem tiếp' icon={ArrowBtn} position='right' />
                    </Grid>
                </Grid>
                <Grid className="hp-w1300">
                    <Title title="Tin mỹ phẩm"/>
                    <Grid container justifyContent='space-between' alignItems="flex-start" spacing={4}>
                        <Grid item md={2}>
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" /> 
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" /> 
                        </Grid> 
                    </Grid>
                    <Grid align='right'>
                        <ButtonPopup text='Trở lại' icon={ArrowBtn} position='left' />
                        <ButtonPopup text='Xem tiếp' icon={ArrowBtn} position='right' />
                    </Grid>
                </Grid>
                <Grid className="hp-w1300">
                    <Title title="Mẹo làm đẹp"/>
                    <Grid container justifyContent='space-between' alignItems="flex-start" spacing={4}>
                        <Grid item md={2}>
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" /> 
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" />
                        </Grid>
                        <Grid item md={2}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" /> 
                        </Grid> 
                    </Grid>
                    <Grid align='right'>
                        <ButtonPopup text='Trở lại' icon={ArrowBtn} position='left' />
                        <ButtonPopup text='Xem tiếp' icon={ArrowBtn} position='right' />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default News;