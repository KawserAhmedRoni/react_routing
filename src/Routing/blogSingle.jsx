import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Daynamic Routing Sype-5 : ai page a data ta need so data link add korlam but data thekke toh sob lagbe nah only des need ***
import blogsData from "../../public/API/blogData.json";

const BlogSingle = () => {
	// Daynamic Routing Sype-3 : Now Only title ta khuje paschi ai useParams hook er madhome ***
	const { title } = useParams();

	const [bodyData, setBodyData] = useState("");

	useEffect(() => {
		// Daynamic Routing Sype-5 : taile tai filter koira des ta nia aktta variable a raikha delam
		const onlyBodyData = blogsData.filter((blog) => {
			return blog.title === title;
		});
		// Daynamic Routing Sype-6 : fiter only des data k useState a set korlam
		setBodyData(onlyBodyData[0].des);
	}, []);

	return (
		<>
			<h1>Hellow, I am Blog Single Page</h1>
			{/* Daynamic Routing Sype-4 : so now title sow here can check here */}
			<h2>Blogs / {title}</h2>
			{/* Daynamic Routing Sype-7 :  Now use here Done ! */}
			<p>{bodyData}</p>
		</>
	);
};

export default BlogSingle;
