import React, { Component } from "react";

class Search extends Component {
	render() {
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
							<a className="navbar-item" href="/">Search</a>

							<a className="navbar-item" href="/">Directory</a>
						</div>
					</div>
				</nav>
                <div className="is-12" style={{height: "30px"}}></div>
                    
                    
                    <div className="dropdown is-active">
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Dropdown button</span>
      <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a href="/" className="dropdown-item">
        Search by Country
      </a>
      <a className="dropdown-item" href="/">
        USA
      </a>
      <a href="/" className="dropdown-item is-active">
        FRANCE
      </a>
      <a href="/" className="dropdown-item">
        AUSTRALIA
      </a>
     
    
    </div>
  </div>
</div>
			</>
		);
	}
}

export default Search;
