import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
	education: { school, degree, fieldofstudy, to, from, description },
}) => {
	return (
		<Fragment>
			<h3 className='text-dark'>{school}</h3>
			<p>
				<Moment format='DD/MM/YYYY'>{from}</Moment> -{" "}
				{!to ? " Now" : <Moment format='DD/MM/YYYY'>{to}</Moment>}
			</p>
			<p>
				<strong>Position: </strong>
				{degree} in {fieldofstudy}
			</p>
			<p>
				<strong>Description: </strong>
				{description}
			</p>
		</Fragment>
	);
};

ProfileEducation.propTypes = {
	education: PropTypes.object.isRequired,
};

export default ProfileEducation;
