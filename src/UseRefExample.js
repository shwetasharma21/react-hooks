import React, { useEffect, useState, useRef } from "react";

function UseRefExample() {
	const [inputValue, setInputValue] = useState("");
	const previousInputValue = useRef("");
	useEffect(() => {
		previousInputValue.current = inputValue;
	}, [inputValue]);
	return (
		<div className="m-2">
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<h2>current Value: {inputValue}</h2>
			<h2>Previous Value:{previousInputValue.current}</h2>
		</div>
	);
}

export default UseRefExample;
