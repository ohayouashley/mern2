import React from "react";

const PersonCard = (props) => {
	const { firstName, lastName, hair } = props;

	return (
		<div class="container">
			<h2>
				{lastName}, {firstName}
			</h2>
			<p>age: {props.age}</p>
			<p>hair color: {hair}</p>
		</div>
	);
};

export default PersonCard;
