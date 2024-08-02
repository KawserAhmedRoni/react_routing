import React, { useRef } from "react";

const UseRef = () => {
	const fullNameRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		// taile bujha jascha jkno kisur valu nia e kaj korte parbo ***
		const fullName = fullNameRef.current.value;
		const password = passwordRef.current.value;
		console.log({ fullName, password });
	};
	return (
		<div>
			<h1>Hellow, I am useRef</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="fullName">Full Name</label>
					<input type="text" id="fullName" ref={fullNameRef} />
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" ref={passwordRef} />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default UseRef;
