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
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,  
    };
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, 
        nextArrow: <Arrow img={NextArrow} left={false} />,
        prevArrow: <Arrow img={PrevArrow} left={true}/> 
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
                <br/><br/><br/>
                <Title title="Sản phẩm bán chạy"/>
                <Grid className='slide-top'>
                    <Slider {...settings2}>
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                    </Slider>
                </Grid>
                <Grid className="products hp-w1300">
                    <Title title="Tất cả sản phẩm"/>
                    <Grid container justifyContent='space-between' alignItems="flex-start" spacing={4}>
                        <Grid item md={3}>
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" /> 
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" /> 
                        </Grid>
                        <Grid item md={3}>
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" /> 
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" />
                        </Grid>
                        <Grid item md={3}> 
                            <Card image={ImgItem} title="Tắm trắng thuốc bắc" price="299.000đ" /> 
                        </Grid>
                    </Grid>
                    <Grid align='center'><ButtonPopup text='Xem thêm' icon={ArrowBtn} position='right down' /></Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Products;