import React, { useState } from "react";
import Component2 from "./Component2";
// Stype-2: import the creactContext the Parent componet***
import { UserContext } from "./UserContext";

const Component1 = () => {
	const [user, setUser] = useState({ id: 171, fullName: "Kawser Ahmed" });

	return (
		<>
			<h1>Hellow, I am Component One {user.id}</h1>
			{/* // Stype-3: Wrp the componet jar modha joto componet ashe sob gula thkke ai data gula use korte parbi*** */}
			<UserContext.Provider value={user}>
				<Component2 />
			</UserContext.Provider>
		</>
	);
};

export default Component1;
