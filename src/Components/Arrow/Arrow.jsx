import React from 'react';

function Arrow(props) {
    const { img, onClick,left} = props;
    const styleLeft= {
        position: 'absolute',
        left : '-50px',
        top: '50%',
        transform: 'translate(0,-50%)',
        zIndex:'100'
    }
    const styleRight= {
        position: 'absolute',
        right : '-50px',
        top: '50%',
        transform: 'translate(0,-50%)',
        zIndex:'100' 
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