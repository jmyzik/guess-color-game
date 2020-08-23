import React from "react";
import "./App.css";
import ColorPane from "./components/ColorPane";

function App() {
  return (
    <div className="App">
      <ColorPane red={204} green={9} blue={127} />
    </div>
  );
}

export default App;
