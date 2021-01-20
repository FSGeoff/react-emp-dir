import React, { Component } from "react";
import axios from "axios";

class Directory extends Component {

state = {
    bioPic: "",
    name: "",
    email: "",
    location: "",
    username: ""
}

componentWillMount() {
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
				console.log(employeeArr[0].picture.thumbnail);
				this.setState({
                    bioPic: employeeArr[0].picture.thumbnail,
                    name:
						" " +
						employeeArr[0].name.title +
						" " +
						employeeArr[0].name.first +
						" " +
                        employeeArr[0].name.last,
                        email: employeeArr[0].email,
                        location: employeeArr[0].location.country,
                        username: employeeArr[0].login.username
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
		// const boxStyle = {
		// 	outline: "solid 1px black",
		// 	fontSize: "18px",
		// 	fontFamily: "sans-serif",
		// 	backgroundColor: "#AED1EF",
		// 	padding: "10px",
		// 	border: "5px",
		// 	margin: "auto",
		// };
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
							<a className="navbar-item" href="/" style={navText}>
								Search
							</a>

							<a className="navbar-item" href="/" style={navText}>
								Directory
							</a>
						</div>
					</div>
				</nav>
				<header>
					<h1 style={headerStyle}>EMPLOYEE DIRECTORY</h1>
				</header>
                <div className="is-12" style={{ height: "30px" }}></div>
            <div className="columns">
                <div className="column is-3" style={{border: "solid 1px black"}}>
                <div className="card">
  <div className="card-image">
   
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={this.state.bioPic} alt="bio pic"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{this.state.name}</p>
        <p className="subtitle is-6">{this.state.email}</p>
        <p>{this.state.location}</p>
        <p>{this.state.username}</p>
      </div>
    </div>

   
  </div>
</div>
                </div>
            </div>
			</>
		);
	}
}

export default Directory;
