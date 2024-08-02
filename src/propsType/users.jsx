import React, { useState } from "react";
import User from "./user";

const Users = () => {
	// const [title, setTitle] = useState("Kawser Ahmed Roni");
	// const [id, setId] = useState(171);
	const [user, setuser] = useState({
		title: "Kawser Ahme",
		id: 171,
	});

	return (
		<>
			<h1>Hellow Users</h1>
			<User user={user} />
		</>
	);
};

export default Users;
