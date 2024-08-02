import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import teamData from "../../public/API/teamData.json";

const TeamDetails = () => {
	const { name } = useParams();

	const [memberData, setMemberData] = useState("");

	useEffect(() => {
		const memberName = teamData.filter((member) => member.name === name);
		setMemberData(memberName[0]);
	}, [name]);

	if (!memberData) {
		return <div>Loading...</div>;
	}

	const { id, image, name: memberName, title, des } = memberData;

	return (
		<>
			<section className="team-details-area section-padding">
				<div className="container">
					<div className="section-header text-center mb-5">
						<h2 className="text-capitalize">Hellow, I am {memberName}</h2>
					</div>
					<div className="row g-5 align-items-center">
						<div className="col-lg-5">
							<div className="image">
								<img src={image} alt={memberName} />
							</div>
						</div>
						<div className="col-lg-7">
							<div className="team-details__content" key={id}>
								<h2>{memberName}</h2>
								<span>{title}</span>
								<p className="mt-4 text-justify">{des.slice(0, 402)}</p>
								<p className="text-justify">{des.slice(403)}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TeamDetails;
