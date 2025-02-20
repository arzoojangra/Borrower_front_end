import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../contextAPI/UserContext";

function NavBar(props) {
	const { user, setUser } = useContext(UserContext);
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
			<a href="/" className="navbar-brand p-0">
				<h1 className="m-0">
					<i className="fa fa-search me-2" />
					Mr<span className="fs-5">Borrower</span>
				</h1>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarCollapse">
				<span className="fa fa-bars" />
			</button>
			<div className="collapse navbar-collapse" id="navbarCollapse">
				<div className="navbar-nav ms-auto me-2 py-0 mr-5">
					{!user ? (
						<Link to="/" className="nav-item nav-link">
							Home
						</Link>
					) : user.adminID ? (
						<Link to="/admin-dashboard" className="nav-item nav-link">
							Home
						</Link>
					) : user.jobAssignees_id ? (
						<Link to="/agent-dashboard" className="nav-item nav-link">
							Home
						</Link>
					) : (
						<Link to="/dashboard" className="nav-item nav-link">
							Home
						</Link>
					)}
					<Link to="/about-us" className="nav-item nav-link">
						About
					</Link>

					<Link to="/team" className="nav-item nav-link">
						Our Team
					</Link>

					{user?.adminID ? (
						<Link to="/pool-table" className="nav-item nav-link">
							Pool Table
						</Link>
					) : (
						<Link to="/contact" className="nav-item nav-link">
							Contact
						</Link>
					)}
				</div>

				{!user ? (
					<Link
						to="/sign-in"
						className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">
						Log-In
					</Link>
				) : (
					<a
						role="button"
						className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
						onClick={() => {
							setUser(null);
							localStorage.clear();
							navigate("/");
						}}>
						Log-Out
					</a>
				)}
			</div>
		</nav>
	);
}

export default NavBar;
