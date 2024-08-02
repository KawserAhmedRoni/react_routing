import React from "react";

const StateLefting = (props) => {
	const childData = "Hellow, I am child data from (Child.jsx)";

	props.getChildData(childData);

	return (
		<>
			<h1>Hellow I am Child Page</h1>

			<h2>Come data from Parent : {props.title} </h2>
		</>
	);
};

export default StateLefting;
