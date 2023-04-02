import React, { useState } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import WorkExp from "./Components/WorkExperience";
import SchoolExp from "./Components/SchoolExperience";
import Overview from "./Components/Overview";

const App = () => {
  const [showWorkExpForm, setShowWorkExpForm] = useState(false);
  const [showSchoolForm, setShowSchoolExpForm] = useState(false);
  const [workExp, setWorkExp] = useState([]);
  const [schoolExp, setSchoolExp] = useState([]);
  const [generalInfo, setGeneralInfo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setShowWorkExpForm(false);
    setShowSchoolExpForm(false);
    setIsSubmitted(true);
  };

  const handleGeneralInfoChange = (fields) => {
    setGeneralInfo(fields);
  };

  const submitWorkExp = (workExpData) => {
    const updatedWorkExperiences = [...workExp, workExpData];
    setWorkExp(updatedWorkExperiences);
  };

  const handleToggleWorkForm = () => {
    setShowWorkExpForm(!showWorkExpForm);
  };

  const handleHideWorkForm = () => {
    setShowWorkExpForm(false);
  };

  const submitSchoolExp = (schoolExpData) => {
    const updatesSchoolExp = [...schoolExp, schoolExpData];
    setSchoolExp(updatesSchoolExp);
  };

  const handleToggleSchoolForm = () => {
    setShowSchoolExpForm(!showSchoolForm);
  };

  const handleHideSchoolForm = () => {
    setShowSchoolExpForm(false);
  };

  const handleDeleteWork = (index) => {
    const newArray = [...workExp];
    newArray.splice(index, 1);
    setWorkExp(newArray);
  };

  const handleDeleteSchool = (index) => {
    const newArray = [...schoolExp];
    newArray.splice(index, 1);
    setSchoolExp(newArray);
  };

  return (
    <div className="App">
      {isSubmitted ? (
        <>
          <h2>General Information</h2>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>

          <h2>Work Experience</h2>
          {workExp.map((exp, index) => (
            <div key={index}>
              <p>Company: {exp.company}</p>
              <p>Title: {exp.jobTitle}</p>
              <p>Years Worked: {exp.yearsWorked}</p>
              <button onClick={() => handleDeleteWork(index)}>Delete</button>
            </div>
          ))}

          <h2>School Experience</h2>
          {schoolExp.map((exp, index) => (
            <div key={index}>
              <p>School: {exp.school}</p>
              <p>GraduationYear: {exp.graduationYear}</p>
              <button onClick={() => handleDeleteSchool(index)}>Delete</button>
            </div>
          ))}
        </>
      ) : (
        <>
          <GeneralInfo onChange={handleGeneralInfoChange} />
          <br />
          <h2>Work Experience</h2>
          <div onClick={handleToggleWorkForm} style={{cursor:'pointer'}}>+</div>
          <Overview exp = {workExp} onDelete={handleDeleteWork}/>
         <WorkExp workExp={workExp} onSubmit={submitWorkExp} showWorkExpForm={showWorkExpForm} onHideWorkForm={handleHideWorkForm}/>
          <br />
          <h2>School Experience</h2>
          <div onClick={handleToggleSchoolForm} style={{cursor:'pointer'}}>+</div>
          <Overview exp = {schoolExp} onDelete={handleDeleteSchool}/>
          <SchoolExp schoolExp={schoolExp} onSubmit={submitSchoolExp} showSchoolForm={showSchoolForm} onHideSchoolForm={handleHideSchoolForm}
          />
          <button onClick={submitForm}>Submit CV</button>
        </>
      )}
    </div>
  );
};
export default App