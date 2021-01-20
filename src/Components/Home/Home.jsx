import React from 'react';
import axios from "axios";

const Home = () => {
    return (
        <>
        <body>
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
								<a className="navbar-item">Search</a>

								<a className="navbar-item">Directory</a>
							</div>
						</div>
					</nav>

        </body>
        
        </>
    );
};

export default Home;