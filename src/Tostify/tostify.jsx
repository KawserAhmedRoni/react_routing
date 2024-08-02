import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tostify = () => {
	const tost = () => {
		toast.warn("I am Message", {
			position: "bottom-left",
		});
	};

	return (
		<>
			<h1>Hellow I am Tostify</h1>
			<button onClick={tost}>Click Me</button>
			<ToastContainer autoClose={1000} hideProgressBar={false} />
		</>
	);
};

export default Tostify;
