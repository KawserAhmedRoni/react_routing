const ProductCard = ({ title, des }) => {
	return (
		<>
			<div className="card">
				<h3>{title}</h3>
				<p>{des}</p>
			</div>
		</>
	);
};

export default ProductCard;
