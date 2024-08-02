import uuid from "react-uuid";

const todoData = [
	{
		id: uuid(),
		title: "Todo1",
		des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti reiciendis, inventore ea aliquid minus praesentium!",
		phone: { office: "01546556", home: "01546556" },
	},
	{
		id: uuid(),
		title: "Todo2",
		des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti reiciendis, inventore ea aliquid minus praesentium!",
		phone: { office: "01546556", home: "01546556" },
	},
	{
		id: uuid(),
		title: "Todo3",
		des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti reiciendis, inventore ea aliquid minus praesentium!",
		phone: { office: "01546556", home: "01546556" },
	},
];

function Todo() {
	return (
		<>
			<div className="todo-area">
				{todoData.map(({ title, des, phone, id }) => (
					<div key={id} className="todo">
						<h3>{title}</h3>
						<p>{des}</p>
						{/* here is nested but I make this essy */}
						<p>Office: {phone.office}</p>
						<p>Home: {phone.home}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default Todo;
