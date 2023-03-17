import React from "react";

const Overview = ({ exp, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <ul>
      {exp.map((entry, index) => (
        <li key={index}>
          {entry.jobTitle} {entry.company} {entry.yearsWorked} {entry.school} {entry.graduationYear}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Overview;