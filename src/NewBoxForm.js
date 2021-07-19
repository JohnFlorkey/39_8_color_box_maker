import React, { useState } from 'react';

function NewBoxForm({addBox}) {
	const initialFormState = {
		backgroundColor: "",
		width: "",
		height: ""
	}
	const [formData, setFormData] = useState(initialFormState);
	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData(formData => ({
			...formData,
			[name]: value
		}));
	}
	const handleSubmit = (evt) => {
		evt.preventDefault();
		addBox(formData.backgroundColor, formData.width, formData.height);
		setFormData(initialFormState);
	}
	return (
		<form className="NewBoxForm">
			<label className="NewBoxForm-label" htmlFor="backgroundColor">Backgoround Color</label>
			<input className="NewBoxForm-input" type="text" name="backgroundColor" id="backgroundColorInput" value={formData.backgroundColor} onChange={handleChange}></input>

			<label className="NewBoxForm-label" htmlFor="width">Width</label>
			<input className="NewBoxForm-input" type="text" name="width" id="widthInput" value={formData.width} onChange={handleChange}></input>

			<label className="NewBoxForm-label" htmlFor="height">Wdith</label>
			<input className="NewBoxForm-input" type="text" name="height" id="heightInput" value={formData.height} onChange={handleChange}></input>

			<button onClick={handleSubmit}>Add Box</button>
		</form>
	)
}

export default NewBoxForm;