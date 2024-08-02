import React, { useState } from "react";

const Toggle = () => {
	// here useState mean toogle er value primaryly true
	const [toggle, settoggle] = useState(true);

	return (
		<>
			<div className="toggle-area" style={{ maxWidth: "575px" }}>
				{/* here is toggle jodi true hoi so conditon er modhe jai and p k print kore becasue ture dawa ashe so maily p show thakke */}
				{toggle && (
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Eaque vero debitis dolore animi a repudiandae, sapiente,
						ratione natus ex molestiae maiores reprehenderit omnis
						possimus? Voluptatum consequuntur corrupti vero est vitae?
					</p>
				)}
				<button
					onClick={() => {
						// here (! not) mean toggle k false koira delam when click the btn
						settoggle(!toggle);
					}}
				>
					{/* witout click toggle is true so she want to hide so hide likha ashe */}
					{toggle ? "Hide" : "Show"}
				</button>
			</div>
		</>
	);
};

export default Toggle;
