import React, { useState } from "react";

import "./App.css";

const Deshboard = ({ data }) => {
  const [value, setValue] = useState(null);
  return (
    <div>
      <h1>DropDown</h1>
      <select
        onChange={(e) => {
          setValue(data.filter((d) => d.name === e.target.value));
        }}
      >
        <option>Select one</option>
        {data.map((d) => (
          <option>{d.name}</option>
        ))}
      </select>
      {value && (
        <p>
          {value[0].name} age is {value[0].age}
        </p>
      )}
    </div>
  );
};

export default Deshboard;
