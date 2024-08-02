import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// fetch("/public/API/teamData.json").then((teamData) =>
// 	teamData.json().then((data) => console.log(data))
// ); js idea

const Team = () => {
	const [teamData, setTeamData] = useState([]);

	useEffect(() => {
		fetch("/public/API/teamData.json")
			.then((res) => res.json())
			.then((data) => setTeamData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	return (
		<>
			<h1 className="text-center mt-4">Hellow, I am Team page</h1>
			<section className="team-area">
				<div className="container">
					<div className="row g-4">
						{teamData.map((member) => (
							<div className="col-lg-4" key={member.id}>
								<div className="team__item">
									<div className="team__image">
										<img src={member.image} alt={member.name} />
									</div>
									<h3>
										<Link to={member.name}>{member.name}</Link>
									</h3>
									<span>{member.title}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Team;
