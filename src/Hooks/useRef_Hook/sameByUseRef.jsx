import React, { useState } from "react";

const UseRef = () => {
	const [fullName, setFullName] = useState("");
	const [password, setPassword] = useState("");

	const getFullName = (event) => {
		setFullName(event.target.value);
	};
	const getPassword = (event) => {
		setPassword(event.target.value);
	};

	const fromHandle = (event) => {
		event.preventDefault();
		const userInfo = {
			fullName,
			password,
		};
		console.log(userInfo);
	};

	return (
		<>
			<h1>
				Hellow I am FromControl this is make like same but simple work by
				useRef
			</h1>
			<form onSubmit={fromHandle}>
				<div className="form-control">
					<label htmlFor="fullName">Full Name</label>
					<input
						type="text"
						id="fullName"
						onChange={getFullName}
						value={fullName}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={getPassword}
						value={password}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default UseRef;
