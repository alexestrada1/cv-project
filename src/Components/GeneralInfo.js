import React, { useState } from "react";

const GeneralInfo = ({ onChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    switch (id) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }

    onChange({ name, email, phone });
  };

  return (
    <div className="gen-info">
      <h2>General Info</h2>
      <label htmlFor="name">Enter name: </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleInputChange}
      ></input>

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleInputChange}
      ></input>

      <label htmlFor="phone">Phone Number: </label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default GeneralInfo;
