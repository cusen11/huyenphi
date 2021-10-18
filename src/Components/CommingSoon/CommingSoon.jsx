import React from 'react';

function CommingSoon(props) { 
    const {title} = props
    return (
        <>
            <h1 style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>Trang {title} đang cập nhật</h1>
        </>
    );
}

export default CommingSoon;