import React from "react";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: ""
    };
  }
  
  handleChange = e =>{
    const {id, value} = e.target;
    this.setState({
      [id]: value,
    })
    this.props.onChange(this.state)
  }

  render() {
    const {name, email, phone} = this.state

    return (
      <div className="gen-info">
        <label htmlFor="name">Enter name: </label>
        <input type="text" id="name" value={name} onChange = {this.handleChange}></input>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange = {this.handleChange}></input>

        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" id="phone" value={phone} onChange = {this.handleChange}></input>

      </div>
    );
  }
}
export default GeneralInfo;
