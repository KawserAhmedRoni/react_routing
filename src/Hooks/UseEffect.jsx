import React, { useEffect, useState } from "react";

const UseEffect = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log("useEffect");
	}, [count]);

	return (
		<>
			{console.log("rendering")}
			<h1>Count: {count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
		</>
	);
};

export default UseEffect;
