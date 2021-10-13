import React from 'react';
import './ButtonLink.css';

function ButtonLink(props) { 
  const {text,position,icon,link} = props
    return (
        <>
          <a href={link} 
          id="button" className={position}><span>{icon ? <img src={icon} alt="arrow" /> : ''}</span>{text}</a>  
        </>
    );
}

export default ButtonLink;