import React from "react";



export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {people: [], safe_areas: [], not_safe_areas: [], responders: [], extra: []};
	}

	render() {
	return (
		<div >
				<h1 style={{ paddingTop: "2em", textAlign: "center", color: "red" }}> P Cubed</h1>
				<div style={{ paddingTop: "-2em", margin: "5em", width: "85vw", height: "50vh" }}>
					
				</div>


		</div>
		
	);
}
}
