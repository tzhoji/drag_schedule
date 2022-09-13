import logo from './logo.svg';
import './App.css';


import React, { useState } from "react";
export default function App() {
  const [origin, setOrigin] = useState(["Nurse1", "Nurse2", "Nurse3"]);
  const [target, setTarget] = useState([]);
  const drag = (ev, text) => {
    ev.dataTransfer.setData("text", text);
  };
  const drop = (ev) => {
    const text = ev.dataTransfer.getData("text");
    const index = origin.findIndex((o) => o === text);
    setOrigin((origin) => origin.filter((_, i) => i !== index));
    setTarget((target) => [...target, text]);
  };
  return (
    <div>
      <style>
        {`
          .draggable {
            border: 1px solid black;
            justify-content:center;
            width:80px;
            box-radius:5px;
            // margin-right: 5px;

          }
          
          #target {
            border: 1px solid black;
            width: 95vw;
            height: 100px;
            padding: 5px;
          }
          `}
      </style>
      <h2>Nurse On Duty</h2>
      {origin.map((o) => {
        return (
          <div
            className="draggable"
            draggable
            onDragStart={(e) => drag(e, o)}
            key={o}
            onClick={(e) => e.stopPropagation()}
          >
            {o}
          </div>
        );
      })}
      <h2>Absence</h2>
      <div id="target" onDragOver={(e) => e.preventDefault()} onDrop={drop}>
        {target.map((t) => {
          return (
            <div className="draggable" key={t}>
              {t}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
