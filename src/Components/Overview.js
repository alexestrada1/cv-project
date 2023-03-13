import React from "react";
class Overview extends React.Component {
  render() {
    return (
        <ul>
        {this.props.exp.map((entry, index) => (
            <li key={index}>
              {entry.jobTitle} {entry.company} {entry.yearsWorked} {entry.school} {entry.graduationYear}
            </li>
          ))}
          </ul>
    );
  }
}
export default Overview;
