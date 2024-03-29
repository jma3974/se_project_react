import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/se_project_react">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
