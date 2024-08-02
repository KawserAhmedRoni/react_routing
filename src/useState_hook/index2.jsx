import React, { useState } from "react";

const UseState_hook2 = () => {
	const [count, setCount] = useState(0);

	const incrementNow = () => {
		// setCount(count + 1);
		// setCount(count + 1);
		// setCount(count + 1);
		// But Now ***
		setCount((count) => count + 1);
		setCount((count) => count + 1);
		setCount((count) => count + 1);
	};

	return (
		<>
			<h1>Count : {count} </h1>
			<button onClick={incrementNow}>increase</button>
		</>
	);
};

export default UseState_hook2;
