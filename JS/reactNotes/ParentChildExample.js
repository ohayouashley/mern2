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

//?there;'s going to be some data coming from our App.js
t;
//? the reason this is not working is because you don't have react installed on this project. You haven't even made a project
//?for this section of your homework you need to go do that before it will work with react.
