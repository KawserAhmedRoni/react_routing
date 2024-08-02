import React from "react";
import FAQ from "./faq";
import { faqData } from "./faqData";

const FAQs = () => {
	return (
		<>
			<section className="faq-area">
				{faqData.map((faq) => (
					<FAQ key={faq.id} {...faq} />
				))}
			</section>
		</>
	);
};

export default FAQs;
