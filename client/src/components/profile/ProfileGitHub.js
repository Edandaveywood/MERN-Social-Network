import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getGitHubRepos } from "../../actions/profile";

const ProfileGitHub = ({ username, getGitHubRepos, repos }) => {
	useEffect(() => {
		getGitHubRepos(username);
	}, [getGitHubRepos]);

	return (
		<Fragment>
			<div className='profile-github'>
				<h2 className='text-primary my-1'>
					<i className='fab fa-github' /> Github Repos
					{repos === null ? (
						<Spinner />
					) : (
						repos.map((repo) => (
							<div key={repo.id} className='repo bg-white p-1 my-1'>
								<div>
									<h4>
										<a
											href={repo.html_url}
											target='_blank'
											rel='noopener noreferrer'
										>
											{repo.name}
										</a>
									</h4>
									<p style={{ fontSize: "1rem" }}>{repo.description}</p>
								</div>
								<div>
									<ul>
										<li className='badge badge-primary'>
											Stars: {repo.stargazers_count}
										</li>
										<li className='badge badge-dark'>
											Watchers: {repo.watchers_count}
										</li>
										<li className='badge badge-light'>
											Forks: {repo.forks_count}
										</li>
									</ul>
								</div>
							</div>
						))
					)}
				</h2>
			</div>
		</Fragment>
	);
};

ProfileGitHub.propTypes = {
	username: PropTypes.string.isRequired,
	getGitHubRepos: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
	repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGitHubRepos })(ProfileGitHub);
