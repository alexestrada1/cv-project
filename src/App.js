import React, { Component } from "react"
import GeneralInfo from "./Components/GeneralInfo";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
    };
  }


  render(){
    return(
    <div className="App">
    <form>
      <GeneralInfo />
    </form>
    </div> 
    )
  }
}
export default App