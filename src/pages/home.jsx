import myData from "../../public/API/productData.json";
import ProductCard from "../components/productCard";
import State from "../components/state";
import Todo from "../components/todo";

const Home = () => {
	return (
		<>
			<h2>I am Home Page</h2>
			<h3>Product area start here</h3>
			<section className="card-area">
				{myData.map(({ title, des }, index) => (
					<ProductCard key={index} title={title} des={des} />
				))}
			</section>
			<h3>Product area end here</h3>
			<h3>Todo area start here</h3>
			<Todo />
			<h3>Todo area end here</h3>

			<h3>20.State area start here</h3>
			<section className="section-padding" style={{ paddingLeft: "30px" }}>
				<State/>
			</section>
			<h3>20.State area end here</h3>
		</>
	);
};

export default Home;
