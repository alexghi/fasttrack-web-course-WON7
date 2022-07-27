import React from "react";
import "./App.css";

function onClick () {
    alert("Clicked!")
}

function App2 () {
  return (
    <button onClick={onClick}>Click Me
   </button>
  );
}
export default App2;