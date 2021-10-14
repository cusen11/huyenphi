import { Typography } from '@material-ui/core';
import React from 'react';
import Line from '../../Assets/Images/title-line.png'
import './Title.css'

function Title(props) {
    const {title} = props
    return (
        <>
            <div className="title">
                <Typography variant="h3" >{title}</Typography>
                <img src={Line} alt={title} />
            </div>
        </>
    );
}

export default Title;