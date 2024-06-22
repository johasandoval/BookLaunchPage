import React from "react";
import ReactDOM from "react-dom/client";
import smoothscroll from "smoothscroll-polyfill";
import App from "./App.jsx";
import "./index.css";
smoothscroll.polyfill();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
