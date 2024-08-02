import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Imported Css ***
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";

// Imported Js ***
import "bootstrap/dist/js/bootstrap.bundle.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
