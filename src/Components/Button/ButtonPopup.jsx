import React from 'react';
import './ButtonLink.css';

function ButtonPopup(props) { 
  const {text,position,icon} = props
    return (
        <>
          <button
          id="button" className={position}><span>{icon ? <img src={icon} alt="arrow" /> : ''}</span>{text}</button>  
        </>
    );
}

export default ButtonPopup;