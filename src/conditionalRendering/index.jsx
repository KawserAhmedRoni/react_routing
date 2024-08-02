import React, { Component } from "react";
import HomePage from "./homePage";
import SingIn from "./singIn";

export default class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			goSingIN: true,
		};
	}

	render() {
		// use if else ***
		// const { goSingIN } = this.state;
		// if (goSingIN) {
		// 	return (
		// 		<>
		// 			<HomePage />
		// 		</>
		// 	);
		// } else {
		// 	return (
		// 		<>
		// 			<SingIn />
		// 		</>
		// 	);
		// }

		// use element ***
		// const { goSingIN } = this.state;
		// let element;
		// if (goSingIN) {
		// 	element = <HomePage />;
		// } else {
		// 	element = <SingIn />;
		// }
		// return element;

		// essy the tartanari ***
		const { goSingIN } = this.state;
		return <>{goSingIN ? <HomePage /> : <SingIn />}</>;
	}
}
