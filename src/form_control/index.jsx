import React, { useState } from "react";

function FromControl() {
	// akhany useState faka stype: 1 ok***
	const [nam, setName] = useState("");
	const [mail, setEmail] = useState("");
	const [pass, setPassword] = useState("");
	const fullName = (e) => {
		// ami ai khanny useState er valu delam stype 2 ok *** But valu ta pailam koi..? pailam hoilo e.target.value hoite ja kina astacha html valu thakke becasue useState er variable input er valu hisabe dawa ashe. then oikhan thake useStete value nijer modhe send kortacha.
		setName(e.target.value);
	};
	const email = (e) => {
		setEmail(e.target.value);
	};
	const password = (e) => {
		setPassword(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		// then ami oita ai jaita console kore dekte partachi stype 3 ok ***
		// console.log(nam, mail, pass);
		// console.log("Data is Submited");
		// Now ami aita k akta object banai console korlam becasue reallife a aivabe e database a send kora jabbe.
		let userInfo = {
			// nam: nam,
			// mail: mail,
			// pass: pass,
			// but we know in es6 some object aivabe o use kora jai so 🙂

			nam,
			mail,
			pass,
		};
		console.log(userInfo);
	};

	return (
		<>
			<form className="myform" action="" onSubmit={handleSubmit}>
				<div className="from-group">
					<label htmlFor="fullName">Full Name </label>
					<input
						type="text"
						name="fullName"
						id="name"
						value={nam}
						required
						onChange={fullName}
					/>
				</div>
				<div className="from-group">
					<label htmlFor="email">Your Email </label>
					<input
						type="email"
						name="email"
						id="email"
						value={mail}
						required
						onChange={email}
					/>
				</div>
				<div className="from-group">
					<label htmlFor="password">Password </label>
					<input
						type="password"
						name="password"
						id="password"
						value={pass}
						required
						onChange={password}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default FromControl;
