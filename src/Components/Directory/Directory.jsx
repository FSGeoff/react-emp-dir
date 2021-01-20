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

        const boxStyle = {
            outline: "solid 1px black",
            fontSize: "18px",
            fontFamily: "sans-serif",
            backgroundColor: "#AED1EF",
            padding: "10px",
            border: "5px",
            margin: "auto"
        }
		
		return (
			<div className="columns">
				<div
					className="column is-3"
					style={boxStyle}
				>
					<h1 style={{textAlign:"center"}}>EMPLOYEE DATA</h1>
					<p1>Name:</p1>
					<br />
					<p1>Location:</p1>
					<br />
					<p1>Email:</p1>
					<br />
					<p1>Username:</p1>
				</div>
			</div>
		);
	}
}

export default Directory;
