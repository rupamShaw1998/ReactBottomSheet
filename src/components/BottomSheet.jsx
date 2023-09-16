import React, { useState } from "react";
import "../styles/BottomSheet.css";

const BottomSheet = () => {
  const [snapPoint, setSnapPoint] = useState("closed");

  return (
    <div className="container">
      <span>Click to open the Bottom Sheet </span>
      <button onClick={() => setSnapPoint("half-open")}>+</button>

      <div className={`bottom-sheet ${snapPoint}`}>
        <button
          onClick={() => setSnapPoint("closed")}
        >
          close
        </button>
        <button
          onClick={() => setSnapPoint("half-open")}
        >
          half
        </button>
        <button
          onClick={() => setSnapPoint("fully-open")}
        >
          full
        </button>
        <h1>Contents</h1>
      </div>
    </div>
  );
};

export default BottomSheet;
