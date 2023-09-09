import React from "react";
import ReactDOM from "react-dom/client"; //client ne maradjon bent a 'react-dom után, mert akkor nem jeleníti meg a szöveget'
import "./index.css";
import Terminator from "./components/terminator/terminator.component.jsx";
import "tachyons"; //https://tachyons.io/#style
import { models } from './models';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    <Terminator id={models[0].id} name={models[0].name} serialNumber={models[0].serialNumber} />,
    <Terminator id={models[1].id} name={models[1].name} serialNumber={models[1].serialNumber} />
    <Terminator id={models[2].id} name={models[2].name} serialNumber={models[2].serialNumber} />
    <Terminator id={models[3].id} name={models[3].name} serialNumber={models[3].serialNumber} />
    <Terminator id={models[4].id} name={models[4].name} serialNumber={models[4].serialNumber} />
    <Terminator id={models[5].id} name={models[5].name} serialNumber={models[5].serialNumber} />
    <Terminator id={models[6].id} name={models[6].name} serialNumber={models[6].serialNumber} />
    <Terminator id={models[7].id} name={models[7].name} serialNumber={models[7].serialNumber} />
    <Terminator id={models[8].id} name={models[8].name} serialNumber={models[8].serialNumber} />
    <Terminator id={models[9].id} name={models[9].name} serialNumber={models[9].serialNumber} />
  </div>
  );

  /*
  
ReactDOM.render(
  <div>
    <Terminator id={models[0].id} name={models[0].name} serialNumber={models[0].serialNumber} />,
    <Terminator id={models[1].id} name={models[1].name} serialNumber={models[1].serialNumber} />
    <Terminator id={models[2].id} name={models[2].name} serialNumber={models[2].serialNumber} />
    <Terminator id={models[3].id} name={models[3].name} serialNumber={models[3].serialNumber} />
    <Terminator id={models[4].id} name={models[4].name} serialNumber={models[4].serialNumber} />
    <Terminator id={models[5].id} name={models[5].name} serialNumber={models[5].serialNumber} />
    <Terminator id={models[6].id} name={models[6].name} serialNumber={models[6].serialNumber} />
    <Terminator id={models[7].id} name={models[7].name} serialNumber={models[7].serialNumber} />
    <Terminator id={models[8].id} name={models[8].name} serialNumber={models[8].serialNumber} />
    <Terminator id={models[9].id} name={models[9].name} serialNumber={models[9].serialNumber} />
  </div>,
  document.getElementById("root")
);
*/