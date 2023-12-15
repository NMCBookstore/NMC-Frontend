import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/main.scss";
import "./assets/vendor/css/bdxfont.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./layout/ScrollToTop";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Suspense
          fallback={
            <div style={{ display: "flex", justifyContent: "center" }}></div>
          }
        >
            <ScrollToTop />
            <App />
        </Suspense>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
