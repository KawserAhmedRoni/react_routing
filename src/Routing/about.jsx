import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
	const [aboutData, setAboutData] = useState([]);

	useEffect(() => {
		fetch("/public/API/aboutData.json")
			.then((res) => res.json())
			.then((data) => setAboutData(data))
			.catch((error) => console.error("Error Fetching Data :", error));
	}, []);

	return (
		<>
			<h1 className="text-center my-4">Hellow, I am About page</h1>
			<section className="about-area">
				<div className="container-fluid">
					<div className="row g-4">
						{aboutData.map(({ id, image, name, title, des }) => (
							<div className="col-lg-6" key={id}>
								<div className="about__item">
									<div className="head d-flex gap-3">
										<div>
											<img src={image} alt={name} />
										</div>
										<div>
											<h4 className="mb-1 text-capitalize">
												{name}{" "}
											</h4>
											<span className="text-capitalize">
												{title}
											</span>
										</div>
									</div>
									<p className="des mt-4">{des.slice(0, 320)} ...</p>
									<Link
										to={name}
										className="btn-one mt-4"
										state={{ id, image, name, title, des }}
									>
										About Me
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
