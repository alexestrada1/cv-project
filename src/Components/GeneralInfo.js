import React from "react";

 class GeneralInfo extends React.Component {
  render() {
    return (
      <div className="gen-info">
        <label htmlFor="name">Enter name: </label>
        <input type="text" id="name" ></input>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" ></input>

        <label htmlFor="phone">Phone Number: </label>
        <input type="tel" id="phone" ></input>

        <button type="submit">Submit</button>
      </div>
    );
  }
}
export default GeneralInfo
