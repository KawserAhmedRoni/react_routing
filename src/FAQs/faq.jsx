import React from "react";

const FAQ = ({ id, title, des }) => {
	return (
		<>
			<div className="faq__item">
				<div>
					<h2>{title}</h2>
					<button>+</button>
				</div>
				<p>{des}</p>
			</div>
		</>
	);
};

export default FAQ;
