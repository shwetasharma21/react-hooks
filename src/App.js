import React from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";
import UseContext from "./UseContext";
import UseContextExample from "./UseContextExample";
import UseRefExample from "./UseRefExample";
import UseMemoExample from "./UseMemoExample";
import UseMemoEg from "./UseMemoEg";

function App() {
	return (
		<div className="d-flex flex-column justify-content-center align-items-center m-4">
			<UseState />
			<UseEffect />
			<UseMemo />
			<UseRef />
			<UseContext />
			<UseContextExample />
			<UseRefExample />
			<UseMemoExample />
			<UseMemoEg />
		</div>
	);
}

export default App;
