import React from "react";

class WorkExp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobTitle: "",
      company: "",
      yearsWorked: "",
    };
  }

  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { jobTitle, company, yearsWorked } = this.state;
    const newExp = { jobTitle, company, yearsWorked };
    this.props.onHideWorkForm();
    this.props.onSubmit(newExp);
    this.setState({
      jobTitle: "",
      company: "",
      yearsWorked: "",
    });
  };

  render() {
    const { jobTitle, company, yearsWorked } = this.state;
    const {showWorkExpForm} = this.props
    return (
      <div className="work-exp" style={{display: showWorkExpForm ? 'block': 'none'}}>
        <label htmlFor="experience">Job Title: </label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="compant">Company: </label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="experience-years">Years Worked: </label>
        <input
          type="number"
          id="yearsWorked"
          value={yearsWorked}
          min="0"
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.handleSubmit}>Add Experience</button>
      </div>
    );
  }
}
export default WorkExp;
