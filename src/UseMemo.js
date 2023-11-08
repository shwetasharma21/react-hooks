import React, { useEffect, useMemo, useState } from "react";

function UseMemo() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);
	const themeStyles = useMemo(() => {
		return {
			backgroundColor: dark ? "black" : "White",
			color: dark ? "White" : "Black",
		};
	}, [dark]);
	useEffect(() => {
		console.log("Theme Changed");
	}, [themeStyles]);
	// If our input no changes only then we need to render this code
	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]);
	return (
		<>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>
			<button onClick={() => setDark((prevDark) => !prevDark)}>
				Change Theme
			</button>
			<div style={themeStyles}>{doubleNumber}</div>
		</>
	);
	function slowFunction(num) {
		console.log("Calling the function");
		for (let i = 0; i <= 100000000; i++) {
			return num * 2;
		}
	}
}

export default UseMemo;
