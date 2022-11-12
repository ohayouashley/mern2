import React from "react";

//a parent component is any component that calls another component
//from inside their own return statement
const ParentComponent = (props) => {
	return (
		<div>
			<ChildComponent firstName {..."Betty"} lastName {..."Mavis"} />
		</div>
	);
};

//react will automatically create a js object named "props"
//using the attributes we added when we called the ChildComponent
// in our ParentComponent

const ChildComponent = (props) => {
	return (
		<p>
			Hellow my name is {props.firstName} {props.lastName}
		</p>
	);
};

//props in this example would look like this:
// props = {
//     firstName: 'Betty',
//     lasstName: 'Mavis'
// }
