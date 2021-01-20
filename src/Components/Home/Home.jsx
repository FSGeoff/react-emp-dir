import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
	state = {
		bioPic: "",
		name: "",
		location: "",
		email: "",
		username: "",
	};

	componentDidMount() {
		this.getEmployee();
	}

	getEmployee = () => {
		axios
			.get("https://randomuser.me/api/")
			.then((response) => {
				const employeeArr = response.data.results;

				console.log(employeeArr[0].gender);
				console.log(employeeArr[0].name.title);
				console.log(employeeArr[0].name.first);
				console.log(employeeArr[0].name.last);
				console.log(employeeArr[0].location.country);
				console.log(employeeArr[0].email);
				console.log(employeeArr[0].login.username);
				console.log(employeeArr[0].login.password);
				console.log(employeeArr[0].picture.large);
				this.setState({
					bioPic: employeeArr[0].picture.large,
					name:
						" " +
						employeeArr[0].name.title +
						" " +
						employeeArr[0].name.first +
						" " +
						employeeArr[0].name.last,
					location: employeeArr[0].location.country,
					email: employeeArr[0].email,
					username: employeeArr[0].login.username,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		const bioPic = {
			display: "block",
			marginLeft: "auto",
			marginRight: "auto",
			width: "50%",
		};
		return (
			<>
				<nav
					className="navbar is-black"
					role="navigation"
					aria-label="main navigation"
				>
					<div className="navbar-brand">
						<img
							src="https://png.pngtree.com/png-vector/20190316/ourlarge/pngtree-employee-icon-design-template-vector-isolated-png-image_856368.jpg"
							style={{ height: "125px", width: "125px" }}
							alt="employee icon"
						/>
					</div>

					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<a className="navbar-item" href="/">
								Search
							</a>

							<a className="navbar-item" href="/">
								Directory
							</a>
						</div>
					</div>
				</nav>
				<div className="is-12" style={{ height: "30px" }}></div>
				<div className="columns">
					<div className="column is-three-fifths is-offset-one-fifth">
						<img
							style={bioPic}
							alt="bio-pic"
							className="is-rounded"
							src={this.state.bioPic}
						/>

						<p1>Name: {this.state.name}</p1>
						<br />
						<p1>Location: {this.state.location}</p1>
						<br />
						<p1>Email: {this.state.email}:</p1>
						<br />
						<p1>Username: {this.state.username}</p1>
					</div>
				</div>
			</>
		);
	}
}

export default Home;
