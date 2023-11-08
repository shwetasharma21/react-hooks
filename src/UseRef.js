import React, { useEffect, useState, useRef } from "react";

function UseRef() {
	const [name, setName] = useState("");
	const renderCount = useRef(0); //renderCount is an object with current:0 property and value
	const inputRef = useRef();
	function focus() {
		inputRef.current.focus();
	}
	useEffect(() => {
		renderCount.current = renderCount.current + 1;
	});
	return (
		<div className="m-2">
			<input
				ref={inputRef}
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<h1>My name is {name} </h1>
			<div>I rendered {renderCount.current} times</div>
			<button onClick={focus}>Focus</button>
		</div>
	);
}

export default UseRef;
