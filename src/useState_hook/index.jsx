import React, { Component } from "react";

export default class UseState_hook1 extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	increaseNow = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		const { count } = this.state;
		return (
			<>
				<h1>Count : {count}</h1>
				<button onClick={this.increaseNow}>increase</button>
			</>
		);
	}
}
