import Proptypes from "prop-types";
import React from "react";

const User = (props) => {
	return (
		<>
			<h1>{props.user.title}</h1>
			<h3>{props.user.id}</h3>
		</>
	);
};

// User.propTypes = {
// 	title: Proptypes.string,
// 	id: Proptypes.number,
// };

// User.defaultProps = {
// 	title: "Hellow World",
// 	id: 0,
// };

// Hard Data ***
User.propTypes = {
	user: Proptypes.shape({
		title: Proptypes.string,
		id: Proptypes.number,
	}),
};

export default User;
