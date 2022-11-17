import "./App.css";
import Form from "./components/Forms";
import React, { useState } from "react";

const App = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	return (
		<div className="App">
			<Form />
			<>
				<form onSubmit={() => {}}>
					<div>
						<label htmlFor="">First Name</label>
						<input type="text" onChange={(e) => setFirstName(e.target.value)} />
					</div>
					{firstName.length < 2 && firstName.length > 0 ? (
						<p>First name must be more than 2 characters</p>
					) : null}
					<div>
						<label htmlFor="">Last Name</label>
						<input type="text" onChange={(e) => setLastName(e.target.value)} />
					</div>
					{firstName.length < 2 && lastName.length > 0 ? (
						<p>Last name must be more than 2 characters</p>
					) : null}
					<div>
						<label htmlFor="">Email</label>
						<input type="text" onChange={(e) => setEmail(e.target.value)} />
					</div>
					{email.length < 5 && email.length > 0 ? (
						<p>Email must be at least 5 characters</p>
					) : null}
					<div>
						<label htmlFor="">Password</label>
						<input type="text" onChange={(e) => setPassword(e.target.value)} />
					</div>
					{password.length < 8 && password.length > 0 ? (
						<p>Password must be at least 8 characters</p>
					) : null}
					<div>
						<label htmlFor="">Confirm Password</label>
						<input
							type="text"
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					{confirmPassword.length !== password && confirmPassword.length > 0 ? (
						<p>Passwords must match</p>
					) : null}
				</form>
			</>
		</div>
	);
};
// function App() {
// 	return (
// 		<div className="App">
// 			<Form />
// 		</div>
// 	);
// }

export default App;
