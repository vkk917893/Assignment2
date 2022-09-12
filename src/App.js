import "./App.css";
import React, { useState } from "react";

import Deshboard from "./Deshboard";
import About from "./About";
import Contact from "./Contact";

function App() {
  const data = [
    { name: "Max", age: "25" },
    { name: "Anil", age: "15" },
    { name: "Sam", age: "45" },
  ];
  const [showDd, setShowDd] = useState(false);
  const [showCb, setShowCb] = useState(false);
  const [showRb, setShowRb] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowDd((prev) => !prev);
        }}
      >
        DropDown
      </button>
      <button
        onClick={() => {
          setShowCb((prev) => !prev);
        }}
      >
        CheckBox
      </button>
      <button
        onClick={() => {
          setShowRb((prev) => !prev);
        }}
      >
        Radio Button
      </button>
      {showDd && <Deshboard data={data} />}
      {showCb && <About data={data} />}
      {showRb && <Contact data={data}/>}
    </div>
  );
}
export default App;
