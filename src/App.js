import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabs from './Tabs';


function App() {
  return (
    <div className="App">
      <Tabs>
        <div label="Active Moves">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
  );
}

export default App;
