import React from 'react';
const Step2 = (props) => {
	const { data, handleChange, next, back } = props;
	function check(e) {
		e.preventDefault();
		next();
	}
	return (
		<form onSubmit={check}>
			<h3>Located in US</h3>
			<div className="form-control">
				<input
					type="radio"
					name="usCitizen"
					value="yes"
					checked={data.usCitizen === 'yes'}
					onChange={handleChange}
				/>
				<label>True</label>
				<input
					type="radio"
					name="usCitizen"
					value="no"
					checked={data.usCitizen === 'no'}
					onChange={handleChange}
				/>
				<label> False </label>
			</div>
			<button onClick={back}>Back</button>
			<button onClick={next}>Next</button>
		</form>
	);
};
export default Step2;
