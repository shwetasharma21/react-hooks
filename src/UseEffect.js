import React, { useEffect, useState } from "react";

function UseEffect() {
	const [resourceType, setResourceType] = useState("posts");
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};
	useEffect(() => {
		console.log("Render");
		return () => {
			console.log("Cleanup");
		};
	}, [resourceType]);
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			console.log("Cleanup");
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<div>
			<button
				className="btn btn-primary p-2 m-2"
				onClick={() => setResourceType("Posts")}
			>
				Posts
			</button>
			<button
				className="btn btn-success p-2 m-2"
				onClick={() => setResourceType("Users")}
			>
				Users
			</button>
			<button
				className="btn btn-dark p-2 m-2"
				onClick={() => setResourceType("Comments")}
			>
				Comments
			</button>
			<h1>{resourceType}</h1>
			<h1>{windowWidth}</h1>
		</div>
	);
}

export default UseEffect;
