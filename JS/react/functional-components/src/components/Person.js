//!4 pieces of info to create a functional component

//* 1. import React library
import React from "react";

//* 2. create a  functional component - the function itself (name same as our file)

const Person = (props) => {
	return (
		<div>
			<h3>I am a person</h3>
		</div>
	);
};

//* 3. export file
export default Person;

//*4. go back to App.js and import it
//*step 5 add your component name in your App.js file in a self-closing tag
