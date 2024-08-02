import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";
import AboutDetails from "./aboutDetails";
import Blog from "./blog";
import BlogSingle from "./blogSingle";
import Contact from "./contact";
import Error from "./error";
import Home from "./home";
import Navbar from "./Menu/Navbar";
import Protected from "./Routes/Protected";
import Team from "./team";
import TeamDetails from "./teamDetails";
import User from "./User";

const Index = () => {
	const [register, setRegister] = useState(false);

	return (
		<BrowserRouter>
			<Navbar register={register} setRegister={setRegister} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/about/:name" element={<AboutDetails />} />
				<Route path="/team" element={<Team />} />
				<Route path="/team/:name" element={<TeamDetails />} />
				<Route path="/blogs" element={<Blog />} />
				{/* Daynamic Routing Sype-2 : Route toh make korlam akhon Route ja jaibe koi so Component make korlam  then choila galam oi Component a */}
				<Route path="/blogs/:title" element={<BlogSingle />} />
				<Route
					path="/contact"
					element={
						<Protected isLogedIn={register}>
							<Contact />
						</Protected>
					}
				/>
				<Route path="/user" element={<User />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Index;
