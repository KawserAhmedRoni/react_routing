import React, { useEffect, useState } from "react";

const DaynamicStyle2 = () => {
	const [value, setValue] = useState("");
	const [valid, setValid] = useState(true);

	useEffect(() => {
		if (value.length > 2) {
			setValid(false);
		} else {
			setValid(true);
		}
	}, [value]);

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div className="inputFeild">
				<h1>Hellow I am Dynamic style two</h1>
				<input
					className={`${valid && "bgRed"}`}
					type="text"
					onChange={handleChange}
					value={value}

					// style={{ backgroundColor: valid ? "red" : "green" }}  / tranari > className={`${valid ? "bgRed" : "bgGreen"}`}
				/>
			</div>
		</>
	);
};

export default DaynamicStyle2;
