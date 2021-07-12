import React from 'react';
const Step5 = (props) => {
	const { data, handleChange, next, back } = props;
	function check(e) {
		e.preventDefault();
		next();
	}
	return (
		<form onSubmit={check}>
			<h3>Large Corporation ?</h3>

			<div className="form-control">
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					value={data.name}
					onChange={handleChange}
				/>

				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					value={data.email}
					onChange={handleChange}
				/>
			</div>
			<button onClick={back}>Back</button>
			<button onClick={next}>Next</button>
		</form>
	);
};
export default Step5;
