import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ register, setRegister }) => {
	return (
		<>
			<header className="header-area">
				<div className="container">
					<div className="header__wrp">
						<Link className="logo" to="/">
							<img src="/public/images/logo.png" alt="logo" />
						</Link>
						<ul className="nav">
							<li className="nav-item">
								<NavLink to="/" className="nav-link">
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/about" className="nav-link">
									about
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/team" className="nav-link">
									team
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/blogs" className="nav-link">
									blogs
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to="/contact" className="nav-link">
									Contact
								</NavLink>
							</li>
						</ul>
						<div className="header__info">
							{register ? (
								<button onClick={() => setRegister(!register)}>
									Logout
								</button>
							) : (
								<button onClick={() => setRegister(!register)}>
									Login
								</button>
							)}
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
