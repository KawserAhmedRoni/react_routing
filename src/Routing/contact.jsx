import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
	const navigate = useNavigate();
	return (
		<>
			<h1>Hellow, I am Routing Contact page</h1>
			<Link to="/">Back Home By Link</Link>
			<button
				onClick={() => {
					navigate("/");
				}}
			>
				Back Home By Button
			</button>
		</>
	);
};

export default Contact;
