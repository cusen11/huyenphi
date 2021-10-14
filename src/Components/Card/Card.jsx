import { Grid, Typography } from '@material-ui/core';
import React from 'react';

function Card(props) {
    const {image, title, price}
    return (
        <Grid>
            <img src={image} alt={title} />
            <Typography variant={h4} align='center'>{title}</Typography>
            {price ? <Typography>{price}</Typography> : ''}
        </Grid>
    );
}

export default Card;