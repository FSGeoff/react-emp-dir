import React, { Component } from "react";
import axios from "axios";

class Directory extends Component {
	getEmployee = () => {
		axios
			.get("https://randomuser.me/api/")
			.then((response) => {
				console.log(response.data.results);
				this.setState({
					imageUrl: response.data.results,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	componentDidMount() {
		this.getEmployee();
	}
	render() {
		return <h1>Directory Page</h1>;
	}
}

export default Directory;
