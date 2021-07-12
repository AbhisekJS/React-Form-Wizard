import React from 'react';
const AltStep3 = (props) => {
	const { data, handleChange, next, back } = props;

	function check(e) {
		e.preventDefault();
		next();
	}
	return (
		<form onSubmit={check}>
			<h3>contracted With Large Corporation ?</h3>
			<div className="form-control">
				<input
					type="radio"
					name="contractedWithLargeCorporation"
					value="yes"
					checked={data.contractedWithLargeCorporation === 'yes'}
					onChange={handleChange}
				/>
				<label>True</label>
				<input
					type="radio"
					name="contractedWithLargeCorporation"
					value="no"
					checked={data.contractedWithLargeCorporation === 'no'}
					onChange={handleChange}
				/>
				<label> False </label>
			</div>
			<button onClick={back}>Back</button>
			<button onClick={next}>Next</button>
		</form>
	);
};
export default AltStep3;
