import React, { useMemo, useState } from "react";

function UseMemoEg() {
	const [count, setCount] = useState(0);
	const [todos, setTodos] = useState([]);

	const calculation = useMemo(() => expensiveCalculation(count), [count]);

	const increment = () => {
		setCount((c) => c + 1);
	};
	const addTodo = () => {
		setTodos((prevTodos) => [...prevTodos, "New Todo"]);
	};
	return (
		<div className="d-flex flex-column justify-content-start">
			<h1>My ToDo List</h1>
			{todos.map((todo, index) => (
				<p key={index}>{todo}</p>
			))}
			<button onClick={addTodo}>Add Todo</button>
			<hr />
			<div>
				Count:{count}
				<button onClick={increment}>+</button>
				<h2>Expensive Calculation</h2>
				<h2>{calculation}</h2>
			</div>
		</div>
	);
}
const expensiveCalculation = (num) => {
	console.log("Calculating....");
	for (let i = 0; i < 10000000; i++) {
		num += i;
	}
	return num;
};

export default UseMemoEg;
