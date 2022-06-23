import React from "react";
import "./App.scss";
import PickMode from "./UI/PickMode/PickMode";
import Squares from "./UI/Squares/Squares";
import HoverSquares from "./UI/HoverSquares/HoverSquares";

function App() {
  return (
    <div className="container">
      <div className="container__play">
        <PickMode />
        <Squares />
      </div>
      <HoverSquares />
    </div>
  );
}

export default App;
