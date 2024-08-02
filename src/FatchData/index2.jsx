import React, { useEffect, useState } from "react";

const loader = (
	<div className="preloader">
		<img src="/images/preloader.svg" alt="" />
	</div>
);

const FetchData2 = () => {
	const [todos, setTodos] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((res) => {
				if (!res.ok) {
					throw Error("Fetch is not Posible");
				} else {
					return res.json();
				}
			})
			.then((data) => {
				setTodos(data);
				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setIsLoading(false);
			});
	}, []);

	return (
		<>
			{isLoading && loader}
			<h1>Hellow, I am Fully FetchData</h1>
			<div className="product-area">
				{error && <p>{error}</p>}
				{todos &&
					todos.map(({ id, title }) => {
						return (
							<div key={id} className="product-item">
								<h3>{title}</h3>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default FetchData2;
