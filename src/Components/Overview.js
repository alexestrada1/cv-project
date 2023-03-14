import React from "react";
class Overview extends React.Component {
    handleDelete = () =>{
        const { index, onDelete } = this.props;
        onDelete(index);
    }
  render() {
    return (
        <ul>
        {this.props.exp.map((entry, index) => (
            <li key={index}>
              {entry.jobTitle} {entry.company} {entry.yearsWorked} {entry.school} {entry.graduationYear}
              <button onClick={this.handleDelete} index={index}>Delete</button>
            </li>
          ))}
          </ul>
    );
  }
}
export default Overview;
