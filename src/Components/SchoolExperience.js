import React, { useState } from "react";

const SchoolExp = (props) => {
  const [school, setSchool] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    id === "school" ? setSchool(value) : setGraduationYear(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchoolExp = { school, graduationYear };
    props.onHideSchoolForm();
    props.onSubmit(newSchoolExp);
    setSchool("");
    setGraduationYear("");
  };

  const { showSchoolForm } = props;

  return (
    <div
      className="school-exp"
      onSubmit={handleSubmit}
      style={{ display: showSchoolForm ? "block" : "none" }}
    >
      <label htmlFor="school">School: </label>
      <input
        type="text"
        id="school"
        value={school}
        onChange={handleInputChange}
      ></input>

      <label htmlFor="graduation-year">Year of Graduation: </label>
      <input
        type="text"
        id="graduationYear"
        value={graduationYear}
        onChange={handleInputChange}
      ></input>

      <button onClick={handleSubmit}>Add School Experience</button>
    </div>
  );
};

export default SchoolExp;
