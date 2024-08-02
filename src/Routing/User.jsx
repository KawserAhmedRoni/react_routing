import React from "react";
import { useSearchParams } from "react-router-dom";

const User = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const [name, setName] = React.useState("");
	const [age, setAge] = React.useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setSearchParams({ name: name, age: age });
	};

	return (
		<>
			<h1>Hellow, I am User</h1>
			{/* ?id=101&name=kawser%20ahmed&title=web%20developer */}
			{/* <h2>id = {searchParams.get("id")}</h2>
			<h2>id = {searchParams.get("name")}</h2>
			<h2>id = {searchParams.get("title")}</h2> */}

			{/* Add new Route */}
			<form onSubmit={handleChange}>
				<input
					type="text"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<input
					type="number"
					onChange={(e) => setAge(e.target.value)}
					value={age}
				/>
				<button type="submit">Find User</button>
			</form>
		</>
	);
};

export default User;
