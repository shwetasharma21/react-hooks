import React from "react";

import { useTheme, useThemeUpdate } from "./ThemeContext";

function FunctionContextComponent() {
	const darkTheme = useTheme(); //Gives value from the context
	const toggleTheme = useThemeUpdate();
	const themeStyles = {
		backgroundColor: darkTheme ? "black" : "red",
		color: darkTheme ? "white" : "Black",
		padding: "2rem",
		margin: "2rem",
	};
	return (
		<div style={themeStyles} className="d-flex flex-column">
			<button className="p-2 m-4 btn btn-dark" onClick={toggleTheme}>
				Toggle me
			</button>
			<h1>Function Theme</h1>
		</div>
	);
}

export default FunctionContextComponent;
