import React from "react";
const StepR2 = (props) => {
  const { data, handleChange, next, back } = props;
  function check(e) {
    e.preventDefault();
    next();
  }
  return (
    <form onSubmit={check}>
      <h3>Login With FB? </h3>
      <div className="form-control">
        <input
          type="radio"
          name="login"
          value="yes"
          checked={data.login === "yes"}
          onChange={handleChange}
        />
        <label>True</label>
        <input
          type="radio"
          name="login"
          value="no"
          checked={data.login === "no"}
          onChange={handleChange}
        />
        <label> False </label>
      </div>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default StepR2;
