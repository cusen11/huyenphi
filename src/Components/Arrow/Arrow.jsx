import React from 'react';

function Arrow(props) {
    const { img, onClick,left} = props;
    const styleLeft= {
        position: 'absolute',
        left : '0',
        top: '50%',
        transform: 'translate(0,-50%)',
        zIndex:'100',
        cursor:'pointer'
    }
    const styleRight= {
        position: 'absolute',
        right : '0',
        top: '50%',
        transform: 'translate(0,-50%)',
        zIndex:'100',
        cursor:'pointer' 
    }
    return (
        <>
           <img onClick={onClick} 
           style={left ? styleLeft : styleRight}
           src={img} alt="arrow"/> 
        </>
    );
}

export default Arrow;