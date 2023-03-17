import React, { useState } from "react";

const WorkExp = ({ onSubmit, showWorkExpForm, onHideWorkForm }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [yearsWorked, setYearsWorked] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "jobTitle") {
      setJobTitle(value);
    } else if (id === "company") {
      setCompany(value);
    } else if (id === "yearsWorked") {
      setYearsWorked(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExp = { jobTitle, company, yearsWorked };
    onHideWorkForm();
    onSubmit(newExp);
    setJobTitle("");
    setCompany("");
    setYearsWorked("");
  };

  return (
    <div className="work-exp" style={{ display: showWorkExpForm ? "block" : "none" }}>
      <label htmlFor="experience">Job Title: </label>
      <input type="text" id="jobTitle" value={jobTitle} onChange={handleInputChange} />

      <label htmlFor="compant">Company: </label>
      <input type="text" id="company" value={company} onChange={handleInputChange} />

      <label htmlFor="experience-years">Years Worked: </label>
      <input
        type="number"
        id="yearsWorked"
        value={yearsWorked}
        min="0"
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add Experience</button>
    </div>
  );
};

export default WorkExp;
