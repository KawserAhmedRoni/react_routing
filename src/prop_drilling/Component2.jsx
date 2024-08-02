import React from "react";
import Component3 from "./Component3";

const Component2 = ({ user }) => {
	return (
		<>
			<h1>Hellow, I am Component Two {user.id}</h1>
			<Component3 />
		</>
	);
};

export default Component2;
