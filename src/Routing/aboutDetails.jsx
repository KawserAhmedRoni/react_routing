import React from "react";
import { useLocation } from "react-router-dom";

const AboutDetails = () => {
	const {
		state: { name, des },
	} = useLocation();

	return (
		<>
			<h3 className="text-center text-uppercase mt-4">About</h3>
			<section className="about-details-area">
				<div className="container">
					<div className="about-details__content">
						<h1>{name}</h1>
						<p>{des}</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutDetails;
