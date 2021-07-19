import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';
import './BoxList.css';

function BoxList() {
	const initialState = [
		{backgroundColor: "red", width: 200, height: 200, id: uuid()},
		{backgroundColor: "blue", width: 100, height: 100, id: uuid()}
	]

	const [ boxes, setBoxes ] = useState(initialState);

	function addBox(backgroundColor, width, height) {
		setBoxes(boxes => [...boxes, {backgroundColor, width: `${width}px`, height: `${height}px`, id: uuid()}]);
	}

	function removeBox(id) {
		setBoxes(boxes => boxes.filter(b => b.id !== id));
	}

	return (
		<div>
			<div className="BoxList">
				{boxes.map(b => <Box key={b.id} backgroundColor={b.backgroundColor} width={b.width} height={b.height} removeBox={() => removeBox(b.id)}/>)}
			</div>
			<NewBoxForm addBox={addBox} />
		</div>
		
	);
}

export default BoxList;