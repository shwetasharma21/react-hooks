import React, { useEffect, useState } from "react";

function UseMemoExample() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	// const calculation = expensiveCalculation(count);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const addTodo = () => {
		setTodos((prevTodos) => [...prevTodos, "New Todo"]);
	};

	return (
		<div className="m-2">
			<h2>My Todos</h2>
			{todos.map((todo, index) => {
				return <p key={index}>{todo}</p>;
			})}
			<button onClick={addTodo}>Add todo</button>
			<hr />
			<div>
				Count:{count}
				<button onClick={increment}>+</button>
				<h2>expensiveCalculation</h2>
				{/* {calculation} */}
			</div>
		</div>
	);
}
const expensiveCalculation = (num) => {
	console.log("Calculating");
	for (let i = 0; i < 10000000000; i++) {
		num += i;
	}
	return num;
};

export default UseMemoExample;
