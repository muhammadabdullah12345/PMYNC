import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./style.css";
import "../components/navbar.css";
import "../components/footer.css";
import "../components/faq.css";
import "../components/in-progress.css";
import "../public/css/index.css";
import "../public/css/about.css";
import "../public/css/members.css";
import "../public/css/contact.css";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
