import React, { useState } from "react";

const Form = (list, setList) => {
	const [input, setInput] = useState("");

	//submission
	const handleSubmit = (e) => {
		e.preventDefault();
		setList([...list, { content: input, complete: false }]);
		setInput("");
	};

	return (
		<div>
			<h2>Add Item:</h2>
			<form onSubmit={handleSubmit}>
				{" "}
				{/*use state to get the value*/}
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<input type="submit" value="Do" />
			</form>
			{input}
		</div>
	);
};

export default Form;
