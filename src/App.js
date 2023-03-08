import React, { Component } from "react"
import GeneralInfo from "./Components/GeneralInfo";

class App extends Component{
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }
  handleFieldsChange = fields =>{
    this.setState(fields)
  }
  render(){
    return(
    <div className="App">
    <form onSubmit={this.handleSubmit}>
      <GeneralInfo onChange={this.handleFieldsChange}/>
      <button type="submit">Submit CV</button>
    </form>
    </div> 
    )
  }
}
export default App