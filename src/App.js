import React, { Component } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import WorkExp from "./Components/WorkExperience";
import SchoolExp from "./Components/SchoolExperience";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWorkExpForm: false,
      showSchoolForm: false,
      workExp: [],
      schoolExp: [],
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      showSchoolForm:false,
      showWorkExpForm:false
    })
    console.log(this.state);
  };
  handleGeneralInfoChange = (fields) => {
    this.setState(fields);
  };
  submitWorkExp = (workExpData) => {
    const updatedWorkExperiences = [...this.state.workExp, workExpData];
    this.setState({ workExp: updatedWorkExperiences });
  };
  handleToggleWorkForm = () =>{
    this.setState(prevState => ({
      showWorkExpForm: !prevState.showForm,
    }))
  }
  handleHideWorkForm = () =>{
    this.setState({
      showWorkExpForm: false
    })
  }

  submitSchoolExp = (schoolExpData) => {
    const updatesSchoolExp = [ ...this.state.schoolExp, schoolExpData ];
    this.setState({ schoolExp: updatesSchoolExp });
  };
  handleToggleSchoolForm = () =>{
    this.setState(prevState => ({
      showSchoolForm: !prevState.showForm,
    }))
  }
  handleHideSchoolForm = () =>{
    this.setState({
      showSchoolForm: false
    })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitForm}>
          <GeneralInfo onChange={this.handleGeneralInfoChange} />
          <br />
          <h2>Work Experience</h2>
          <div onClick={this.handleToggleWorkForm} style={{cursor:'pointer'}}>+</div>
         <WorkExp workExp={this.state.workExp} onSubmit={this.submitWorkExp} showWorkExpForm={this.state.showWorkExpForm} onHideWorkForm={this.handleHideWorkForm}/>
          <br />
          <h2>School Experience</h2>
          <div onClick={this.handleToggleSchoolForm} style={{cursor:'pointer'}}>+</div>
          <SchoolExp schoolExp={this.state.schoolExp} onSubmit={this.submitSchoolExp} showSchoolForm={this.state.showSchoolForm} onHideSchoolForm={this.handleHideSchoolForm}
          />
          <button onClick={this.submitForm}>Submit CV</button>
        </form>
      </div>
    );
  }
}
export default App;
