import React, { Component } from "react";
import axios from "axios";

class Directory extends Component {
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
			margin: "auto",
		};
		const headerStyle = {
			fontSize: "40px",
			fontFamily: "Georgia, serif",
			fontColor: "#EBF2F8",
			textAlign: "center",
			fontWeight: "bolder",
			margin: "8px",
			border: "8px",
			padding: "8px",
        };
        
        const navText = {
            fontSize: "25px",
            fontFamily: "Georgia, serif",
        }

		return (
			<>
				<body style={{ backgroundColor: "#052E52" }}>
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
								<a className="navbar-item" href="/" style={navText}>Search</a>

								<a className="navbar-item" href="/" style={navText}>Directory</a>
							</div>
						</div>
					</nav>
					<header>
						<h1 style={headerStyle}>EMPLOYEE DIRECTORY</h1>
					</header>

					<div className="columns">
						<div className="column is-3" style={boxStyle}>
							<figure class="image is-128x128 is-centered">
								<img alt="bio-pic"
									className="is-rounded"
									src="https://bulma.io/images/placeholders/128x128.png"
								/>
							</figure>
							<p1>Name:</p1>
							<br />
							<p1>Location:</p1>
							<br />
							<p1>Email:</p1>
							<br />
							<p1>Username:</p1>
						</div>
					</div>
				</body>
			</>
		);
	}
}

export default Directory;
