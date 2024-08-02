import React, { useEffect, useState } from "react";

const FatchData = () => {
	const [todos, setTodos] = useState(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((res) => res.json())
			.then((data) => {
				setTodos(data);
			});
	}, []);

	return (
		<div>
			<h1>Hellow, I am Fatch Data</h1>
			{todos &&
				todos.map((todo) => {
					return (
						<div key={todo.id}>
							<h2>{todo.title}</h2>
						</div>
					);
				})}
		</div>
	);
};

export default FatchData;
