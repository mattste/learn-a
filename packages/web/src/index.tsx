import { Resources } from "@ryancavanaugh/pkg1";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const r: Resources = {
  resources: ["none"]
};
console.log(r);

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
