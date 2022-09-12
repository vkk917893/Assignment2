import React, { useState } from "react";
import "./App.css";

const About = ({ data }) => {
  const [value, setValue] = useState();
  return (
    <div>
      <h1>CheckBox</h1>
      {data.map((d) => (
        <div>
          <input
            type="checkbox"
            id={d.name}
            name="name"
            value={d.name}
            onChange={(e) => {
              setValue([e.target.value, ...value]);
            }}
          />{" "}
          <label for={d.name}>{d.name}</label>
        </div>
      ))}
    </div>
  );
};

export default About;
