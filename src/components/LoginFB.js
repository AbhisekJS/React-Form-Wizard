import React from "react";
const StepLoginFb = (props) => {
  const { data, handleChange, next, back } = props;

  function check(e) {
    e.preventDefault();
    next();
  }
  return (
    <form onSubmit={check}>
      <h3>Sign In Using FB? </h3>
      <div className="form-control">
        <input
          type="radio"
          name="fbLogIn"
          value="yes"
          checked={data.fbLogIn === "yes"}
          onChange={handleChange}
        />
        <label>True</label>
        <input
          type="radio"
          name="fbLogIn"
          value="no"
          checked={data.fbLogIn === "no"}
          onChange={handleChange}
        />
        <label> False </label>
      </div>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default StepLoginFb;
