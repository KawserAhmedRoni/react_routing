import React, { useState } from "react";
import Component2 from "./Component2";

const Component1 = () => {
	const [user, setUser] = useState({ id: 171, fullName: "Kawser Ahmed" });

	return (
		<>
			<h1>Hellow, I am Component One {user.id}</h1>
			<Component2 user={user} />
		</>
	);
};

export default Component1;
