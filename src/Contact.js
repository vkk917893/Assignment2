import React, { useState } from "react";

const Contact = ({ data }) => {
  const [value, setValue] = useState(null);
  return (
    <form
      onChange={(e) => {
        setValue(data.filter((d) => d.name === e.target.value));
      }}
    >
      <h1>Radio button</h1>
      <p>Please select the person:</p> 
      {data.map((d) => (
        <div>
          <input type="radio" id={d.name} name="name" value={d.name} />{" "}
          <label for={d.name}>{d.name}</label>
        </div>
      ))}
      {value && (
        <p>
          {value[0].name} age is {value[0].age}
        </p>
      )}
    </form>
  );
};

export default Contact;
