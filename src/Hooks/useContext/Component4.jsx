// Stype-4: use the useContext from React***
import React, { useContext } from "react";
// Stype-5: Import also the UserContext that maked by you because aiter modhe e global e oi data ta make hoi ashe***
import { UserContext } from "./UserContext";

const Component4 = () => {
	// Stype-6: Now use the useContext hook and pass your data and keep it a variable and use is from the varibale Done!***
	const myUser = useContext(UserContext);
	// console.log(myUser);
	return (
		<>
			<h1>Hellow, I am Component Four{myUser.id}</h1>
		</>
	);
};

export default Component4;
