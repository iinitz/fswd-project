import * as React from "react";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  console.log = console.warn = console.error = () => {};

  console.error("Something bad happened.");
  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
