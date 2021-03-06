import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
	const [text, setText] = useState("");
	return (
		<Fragment>
			<div className='post-form'>
				<div className='bg-primary p'>
					<h3>Leave a comment</h3>
				</div>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						addComment(postId, { text });
						setText("");
					}}
					className='form my-1'
				>
					<textarea
						name='text'
						cols='30'
						rows='5'
						placeholder='Write a reply'
						value={text}
						onChange={(e) => setText(e.target.value)}
						required
					/>
					<input type='submit' className='btn btn-dark my-1' value='Submit' />
				</form>
			</div>
		</Fragment>
	);
};

CommentForm.propTypes = {
	addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
