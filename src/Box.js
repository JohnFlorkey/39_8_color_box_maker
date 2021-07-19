import React from 'react';
import './Box.css';

function Box({backgroundColor, width, height, id, removeBox}) {
	return (
		<div className="Box-Container">
			<div className="Box" id={id} style={{backgroundColor: backgroundColor, width: width, height: height}}></div>
			<button onClick={removeBox}>X</button>
		</div>
	);
}

export default Box;