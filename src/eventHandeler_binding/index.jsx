import React, { Component } from "react";

export default class EventHandeler_Binding extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
		this.increseNow = this.increseNow.bind(this);
		// this is binding ***
	}

	increseNow() {
		this.setState({
			count: this.state.count + 1,
		});
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				<h1>{count}</h1>
				<button onClick={this.increseNow}>increasing</button>
			</div>
		);
	}
}

// Two type of function ***
// function rony() {
// 	console.log("rony");
// }

// const rony = () => {
// 	console.log("rony");
// };

// rony();
