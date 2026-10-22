import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"          // <-- this line is essential

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = document.getElementById("root");
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
