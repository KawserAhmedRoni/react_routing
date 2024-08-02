import React from "react";
import DaynamicStyle2 from "./index2";

const DynamicStyle = () => {
	const error = false;

	return (
		<>
			<h1 style={{ color: error ? "red" : "green" }}>
				Hellow, I am Dyanamic Styling.
			</h1>
			<DaynamicStyle2 />
		</>
	);
};

export default DynamicStyle;
