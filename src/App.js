import React from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";
import UseContext from "./UseContext";

function App() {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center m-4">
			<UseState />
			<UseEffect />
			<UseMemo />
			<UseRef />
			<UseContext />
		</div>
	);
}

export default App;
