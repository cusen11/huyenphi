import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import './Card.css'

function Card(props) {
    const {image, title, price,} = props
    return (
        <Grid className="card">
            <img src={image} alt={title} />
            <div className="content">
                <Typography variant='h4' align='center'>{title}</Typography>
                {price ? <Typography>{price}</Typography> : ''}
            </div>
        </Grid>
    );
}

export default Card;