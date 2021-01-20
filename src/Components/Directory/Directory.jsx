import React, { Component } from "react";
import axios from "axios";

class Directory extends Component {
	getEmployee = () => {
		axios
			.get("https://randomuser.me/api/")
			.then((response) => {
				const empArr = response.data.results;
				
				console.log(empArr[0].gender);
				console.log(empArr[0].name.title);
				console.log(empArr[0].name.first);
				console.log(empArr[0].name.last);
				console.log(empArr[0].location.country);
				console.log(empArr[0].email);
                console.log(empArr[0].login.username);
                console.log(empArr[0].login.password);
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
