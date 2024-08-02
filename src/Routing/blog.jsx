import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blogs from "../../public/API/blogData.json";

const Blog = () => {
	const [blogs, setblogs] = useState(Blogs);

	const trancatString = (str, num) => {
		if (str.length > num) {
			return str.slice(0, num) + "...";
		} else {
			return str;
		}
	};

	return (
		<>
			<h1>Hellow, I am Blogs page</h1>

			<section className="blog-area">
				{blogs.map(({ id, title, des }) => {
					return (
						<div key={id} className="blog__item">
							<h2>{title}</h2>
							<p>{trancatString(des, 100)}</p>
							{/* Daynamic Routing Sype-1 : title er upor base koira route make korlam */}
							<Link to={title}>Read More</Link>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Blog;
