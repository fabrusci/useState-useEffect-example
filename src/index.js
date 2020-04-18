import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SetStateFixed from "./setStateFixed";

import "./styles.css";

function App() {
  const [showExample, setShowExample] = useState(true);
  const [componentText, setComponentText] = useState("Current text");

  const handleOnClick = evt => {
    evt.preventDefault();
    setShowExample(!showExample);
  };

  useEffect(() => {
    console.log("useEffect called");
    setComponentText("New text");
  }, [showExample]);

  return (
    <div className="App">
      <p>Calling setState on an unmounted component</p>

      {showExample && <SetStateFixed componentText={componentText} />}

      <button onClick={handleOnClick}>Toggle component</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
