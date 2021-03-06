import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link className='btn btn-dark' to='/profiles'>
					Developers
				</Link>
			</li>
			<li>
				<Link className='btn btn-dark' to='/posts'>
					<span className='hide-sm'>Posts</span>
				</Link>
			</li>
			<li>
				<Link className='btn btn-dark' to='/dashboard'>
					<i className='fas fa-user'> </i>{" "}
					<span className='hide-sm'>Dashboard</span>
				</Link>
			</li>
			<li>
				<button className='btn btn-dark' onClick={logout}>
					<i className='fas fa-sign-out-alt'> </i>{" "}
					<span className='hide-sm'> Logout </span>
				</button>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul>
			<li>
				<Link className='btn btn-dark' to='/profiles'>
					Developers
				</Link>
			</li>
			<li>
				<Link className='btn btn-dark' to='/register'>
					Register
				</Link>
			</li>
			<li>
				<Link className='btn btn-dark' to='/login'>
					Login
				</Link>
			</li>
		</ul>
	);

	return (
		<nav className='navbar bg-dark'>
			<h1>
				<Link to='/'>
					<i className='fas fa-code' /> DevConnector
				</Link>
			</h1>
			{!loading && (
				<Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
			)}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
