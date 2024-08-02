import React, { Component } from "react";

class EventHandeler_onChange extends Component {
	constructor(props) {
		super(props);

		this.state = {
			getChange: "",
		};
	}

	handleChange = (e) => {
		this.setState(
			{
				getChange: e.target.value,
			},
			// amni 2 jaiga 1sahe kaj > this mean a callBack ***
			() => {
				console.log(this.state.getChange);
			}
		);
	};

	render() {
		return (
			<>
				<input type="text" onChange={this.handleChange} />
				<p>{this.state.getChange}</p>
			</>
		);
	}
}

export default EventHandeler_onChange;
