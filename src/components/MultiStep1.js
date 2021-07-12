import React from 'react';
const Step1 = (props) => {
	const { data, handleChange, next } = props;

	function check(e) {
		e.preventDefault();
		next();
	}

	return (
		<form onSubmit={check}>
			<h3>Are You a Business Owner</h3>
			<div className="form-control">
				<input
					type="radio"
					name="business"
					value="yes"
					checked={data.business === 'yes'}
					onChange={handleChange}
					required
				/>
				<label>True</label>
				<input
					type="radio"
					name="business"
					value="no"
					checked={data.business === 'no'}
					onChange={handleChange}
					required
				/>
				<label> False </label>
				{/* <label htmlFor="name">Name:
				<input
					type="text"
					name="name"
					value={data.name}
					onChange={handleChange}
					required
				/></label>
		
				<label htmlFor="email">Email:
				<input
					type="email"
					name="email"
					value={data.email}
					onChange={handleChange}
					required
				/></label> */}
			</div>
			<button>Next</button>
		</form>
	);
};
export default Step1;
