import React, { useState } from "react";

const UseState_object = () => {
	// const [useName, setuseName] = useState("");
	// const [useMail, setuseMail] = useState("");
	// const [usePass, setusePass] = useState("");

	// Make simple ***
	const [user, setUser] = useState({ useName: "", useMail: "", usePass: "" }); // like use class component
	let { useName, useMail, usePass } = user; // user hoilo variable R ai gula tar object so essy toh

	// const fullNameFn = (e) => {
	// 	setUser({ useName: e.target.value, useMail, usePass });
	// };
	// const emailFn = (e) => {
	// 	setUser({ useName, useMail: e.target.value, usePass });
	// };
	// const passwordFn = (e) => {
	// 	setUser({ useName, useMail, usePass: e.target.value });
	// };

	// Make simple ***
	const handelChange = (e) => {
		// let fieldName = e.target.name;
		// if (fieldName === "fullName") {
		// 	setUser({ useName: e.target.value, useMail, usePass });
		// } else if (fieldName === "email") {
		// 	setUser({ useName, useMail: e.target.value, usePass });
		// } else if (fieldName === "password") {
		// 	setUser({ useName, useMail, usePass: e.target.value });
		// }

		// also simple and Dynamic ***
		setUser({ ...user, [e.target.name]: e.target.value }); // like > key: value > brakets [] becsuse property name use kortachi so
	};

	const submitFn = (e) => {
		e.preventDefault();
		console.log(user);
	};

	return (
		<>
			<div className="from-area">
				<form action="" onSubmit={submitFn}>
					<div className="from-grop">
						<label htmlFor="useName">Full Name</label>
						<input
							value={useName}
							type="text"
							name="useName"
							required
							onChange={handelChange}
						/>
					</div>
					<div className="from-grop">
						<label htmlFor="useMail">Email</label>
						<input
							value={useMail}
							type="email"
							name="useMail"
							required
							onChange={handelChange}
						/>
					</div>
					<div className="from-grop">
						<label htmlFor="usePass">Password</label>
						<input
							value={usePass}
							type="password"
							name="usePass"
							required
							onChange={handelChange}
						/>
					</div>
					<button>Submit</button>
				</form>
			</div>
		</>
	);
};

export default UseState_object;
