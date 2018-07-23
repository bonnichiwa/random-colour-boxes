import React from 'react';
import './Box.css';

const Box = props => (
 <div className="colored-box" style={{background: `${props.color}`}}></div>       
);

export default Box;