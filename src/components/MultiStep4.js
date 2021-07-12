import React from 'react';
const Step4 = (props) => {
	const { data, handleChange, next, back } = props;
	function check(e) {
		e.preventDefault();
		next();
	}
	return (
		<form onSubmit={check}>
			<h3>Interested In Survey ?</h3>
			<div className="form-control">
				<input
					type="radio"
					name="survey"
					value="yes"
					checked={data.survey === 'yes'}
					onChange={handleChange}
				/>
				<label>True</label>
				<input
					type="radio"
					name="survey"
					value="no"
					checked={data.survey === 'no'}
					onChange={handleChange}
				/>
				<label> False </label>
			</div>
			<button onClick={back}>Back</button>
			<button onClick={next}>Next</button>
		</form>
	);
};
export default Step4;
