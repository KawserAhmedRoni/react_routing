import React, { Component } from "react";

export default class State extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	countIncemt = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	countDcemt = () => {
		this.setState({
			count: this.state.count - 1,
		});
	};

	render() {
		const { count } = this.state;
		return (
			<>
				<h1>Count : {count}</h1>
				<button
					onClick={this.countDcemt}
					disabled={count === 0 ? true : false}
				>
					-
				</button>
				<button
					onClick={this.countIncemt}
					disabled={count === 5 ? true : false}
				>
					+
				</button>
			</>
		);
	}
}
