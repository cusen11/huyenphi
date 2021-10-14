import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './Homepage.css'
import ImgAbout from '../../Assets/Images/about.png'
import Title from '../../Components/Title/Title';
function Homepage() {
    return (
        <>
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
                </Grid>
            </Grid>
        </>
    );
}

export default Homepage;