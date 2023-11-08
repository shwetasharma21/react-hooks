import React, { useState } from "react";

function UseState() {
	const [state, setState] = useState({ theme: "Blue", count: 0 });
	const { theme, count } = state;
	const decrementCounter = () => {
		setState((prevState) => {
			return { ...prevState, count: prevState.count - 1 };
		});
	};
	const incrementCounter = () => {
		setState((prevState) => {
			return { ...prevState, count: prevState.count + 1 };
		});
	};
	return (
		<div>
			<button className="btn btn-danger p-4" onClick={decrementCounter}>
				-
			</button>
			{count}
			{theme}
			<button className="btn btn-success p-4" onClick={incrementCounter}>
				+
			</button>
		</div>
	);
}

export default UseState;
