import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Импорт стилей Bootstrap
// Импорт пользовательских стилей

import App from "./App"; // Импорт вашего основного компонента приложения
import "./styles/main.css";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
