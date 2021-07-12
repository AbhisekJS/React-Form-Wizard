import React from "react";
const Step3 = (props) => {
  const { data, handleChange, next, back } = props;

  function check(e) {
    e.preventDefault();
    // next();
  }
  return (
    <form onSubmit={check}>
      <h3>Large Corporation ?</h3>
      <div className="form-control">
        <input
          type="radio"
          name="largeCorporation"
          value="yes"
          checked={data.largeCorporation === "yes"}
          onChange={handleChange}
        />
        <label>True</label>
        <input
          type="radio"
          name="largeCorporation"
          value="no"
          checked={data.largeCorporation === "no"}
          onChange={handleChange}
        />
        <label> False </label>
      </div>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </form>
  );
};
export default Step3;
