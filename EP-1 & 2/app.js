// const heading = React.createElement(
//   "h1",
//   { id: "head" },
//   "hello world from react"
// ); //creating an element in react, {} is an attribute //this will return object
// const root = ReactDOM.createRoot(document.getElementById("root")); // creating a root in react
// root.render(heading); //rendering the code

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }),
  [
    React.createElement("h1", {}, "i am parth"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
