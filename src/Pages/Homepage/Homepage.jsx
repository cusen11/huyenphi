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


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Homepage() {
    const settings = {
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
            <Header/>
            <Grid className="home-page">
                <Grid className="about" container justifyContent="space-between">
                    <Grid item className="content" md={9}>
                        <Typography variant='h2'>Huyền Phi Comestic</Typography>
                        <Typography>
                            Ngày hôm nay, Huyền Phi đã đứng vững trên thị trường mỹ phẩm trong nước với hơn 8.000 đại lý trải dài khắp toàn quốc với sứ mệnh góp phần mang nét đẹp tới cho mọi phụ nữ Việt.
                            Huyền Phi của ngày mai sẽ còn lớn mạnh hơn thế nữa… nhưng càng to lớn bao nhiêu thì sẽ càng chăm chút khách hàng chân thành bấy nhiêu từ những điều nhỏ nhặt nhất.
                            Nụ cười của bạn là niềm hạnh phúc của Huyền Phi.<br/>
                            Nơi Huyền Phi thuộc về không ở đâu xa xôi mà ngay trong trái tim bạn.
                        </Typography>
                        <Grid item className="image">
                            <img src={ImgAbout} alt="Huyền Phi Comestic" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="news hp-w1300">
                    <Title title="Mẹo làm đẹp"/>
                    <Slider {...settings}>
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc"/>
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc"/>
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc"/>
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc"/>
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc"/>
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc"/>
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc"/>
                        <Card image={ImgItem} title="Tắm trắng thuốc bắc"/>
                    </Slider> 
                </Grid>
                <Grid className="reason hp-w1300">
                    <Title title="Huyền Phi lý do bạn nên lựa chọn"/>
                    <Grid container justifyContent='space-between' alignItems="flex-start" spacing={4}>
                        <Grid item md={3} align='center'>
                            <img src={StartIMG} alt="start" />
                            <Typography> Thành phần sản phẩm được chiết xuất chủ yếu từ các dược liệu có nguồn gốc thiên nhiên</Typography>
                        </Grid>
                        <Grid item md={3} align='center'>
                            <img src={StartIMG} alt="start" />
                            <Typography align='center'> Sản phẩm an toàn cho mọi loại da, từ da khô, da dầu, da hỗn hợp cho tới da nhạy cảm</Typography>
                        </Grid>
                        <Grid item md={3} align='center'>
                            <img src={StartIMG} alt="start" />
                            <Typography align='center'> TSản phẩm đã được Sở Y Tế chứng nhận và cấp phép trên thị trường </Typography>
                        </Grid>
                        <Grid item md={3} align='center'>
                            <img src={StartIMG} alt="start" />
                            <Typography align='center'> MIỄN PHÍ SHIP đối với tất cả đơn hàng trên toàn quốc.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="products hp-w1300">
                    <Title title="Sản phẩm"/>
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
                    </Grid>
                    <Grid align='right'><ButtonLink text='Xem thêm' icon={ArrowBtn} position='right' link='/products'/></Grid>
                </Grid>
                <Grid className="media hp-w1300">
                    <Title title="Thư viện"/>
                    <Grid container justifyContent='space-between' alignItems="flex-start" spacing={2}>
                        <Grid item md={4}>
                            <img src={ImgMedia1} alt='media' />
                        </Grid>
                        <Grid item md={4}> 
                            <img src={ImgMedia2} alt='media' />
                        </Grid>
                        <Grid item md={4}> 
                            <img src={ImgMedia3} alt='media' />
                        </Grid>
                        <Grid item md={4}> 
                            <img src={ImgMedia4} alt='media' />
                        </Grid>
                        <Grid item md={4}> 
                            <img src={ImgMedia5} alt='media' />
                        </Grid>
                        <Grid item md={4}> 
                            <img src={ImgMedia6} alt='media' />
                        </Grid>
                        <Grid item md={4}> 
                            <img src={ImgMedia7} alt='media' />
                        </Grid>
                        <Grid item md={4}> 
                            <img src={ImgMedia8} alt='media' /> 
                        </Grid>
                        <Grid item md={4}> 
                            <img src={ImgMedia9} alt='media' /> 
                        </Grid>
                    </Grid>
                    <Grid align='right'><ButtonLink text='Xem thêm' icon={ArrowBtn} position='right' link='/media'/></Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Homepage;