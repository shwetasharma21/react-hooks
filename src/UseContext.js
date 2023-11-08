import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

function UseContext() {
	return (
		<div className="m-2">
			<ThemeProvider>
				<FunctionContextComponent />
			</ThemeProvider>
		</div>
	);
}

export default UseContext;
