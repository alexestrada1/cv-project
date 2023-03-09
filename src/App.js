import React, { Component } from "react"
import GeneralInfo from "./Components/GeneralInfo";
import WorkExp from "./Components/WorkExperience";

class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      workExp: []
    }
  }
 
  submitForm = e => {
    e.preventDefault();
    console.log(this.state)
  }
  handleGeneralInfoChange = fields =>{
    this.setState(fields)
  }
  submitWorkExp = workExpData =>{
    const updatedWorkExperiences = [...this.state.workExp, workExpData]
    this.setState({workExp: updatedWorkExperiences})
  }
  render(){
    return(
    <div className="App">
    <form onSubmit={this.submitForm}>
      <GeneralInfo onChange={this.handleGeneralInfoChange}/>
      <br/>
      <WorkExp workExp= {this.state.workExp} onSubmit={this.submitWorkExp}/>
      <button onClick={this.submitForm}>Submit CV</button>
    </form>
    </div> 
    )
  }
}
export default App