import React from 'react';
const StepLoginMail = (props) => {
  const { data, handleChange, next, back, reDirect} = props;
  
	function check(e) {
    e.preventDefault();
    reDirect()    
  }
  
	return (
		<form onSubmit={check}>

      
			<h3>Sign In Using Mail? </h3>
			<div className="form-control">
				<input
					type="radio"
					name="mailLogin"
					value="yes"
					checked={data.mailLogin === 'yes'}
					onChange={handleChange}
				/>
				<label>True</label>
				<input
					type="radio"
					name="mailLogin"
					value="no"
					checked={data.mailLogin === 'no'}
					onChange={handleChange}
				/>
				<label> False </label>
			</div>
			<button onClick={back}>Back</button>
			<button onClick={next}>Next</button>
		</form>
	);
};
export default StepLoginMail;
