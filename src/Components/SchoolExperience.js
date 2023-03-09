import React from "react";

class SchoolExp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: "",
      graduationYear: "",
    };
  }

  handleInputChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { school, graduationYear } = this.state;
    const newSchoolExp = { school, graduationYear };
    this.props.onHideSchoolForm();
    this.props.onSubmit(newSchoolExp);
    this.setState({
      school: "",
      graduationYear: "",
    });
  };
  render() {
    const { school, graduationYear } = this.state;
    const{showSchoolForm} = this.props
    return (
      <div className="school-exp" onSubmit={this.handleSubmit} style={{display: showSchoolForm ? 'block': 'none'}}>
        <label htmlFor="school">School: </label>
        <input
          type="text"
          id="school"
          value={school}
          onChange={this.handleInputChange}
        ></input>

        <label htmlFor="graduation-year">Year of Graduation: </label>
        <input
          type="text"
          id="graduationYear"
          value={graduationYear}
          onChange={this.handleInputChange}
        ></input>

        <button onClick={this.handleSubmit}>Add School Experience</button>
      </div>
    );
  }
}

export default SchoolExp;
