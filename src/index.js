import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

sayHello = () => console.log("Hello");
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.sayHello} />
  </div>,
  document.getElementById("root")
);
