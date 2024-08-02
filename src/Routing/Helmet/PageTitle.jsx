import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PageTitle = () => {
	return (
		<HelmetProvider>
			<div>
				<Helmet>
					<title>{title}</title>
				</Helmet>
			</div>
		</HelmetProvider>
	);
};

export default PageTitle;
