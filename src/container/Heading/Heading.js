import React from 'react';
import "./heading.css"

function Heading({title}) {
    return (
        <div className='heading'>
            <div className='head-text'>{title}</div>
            <div className='head-bl'></div>
        </div>
    );
}

export default Heading;