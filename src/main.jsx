import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { getCSP } from "./config/csp.js";

const setCSP = () => {
  const metaTag = document.createElement('meta');
  metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
  metaTag.setAttribute('content', getCSP());
  document.head.appendChild(metaTag);
};

setCSP();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
