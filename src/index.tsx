import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/styles/main.scss";
import "./assets/vendor/css/bdxfont.css";
import { Provider } from "react-redux";
import { persistor } from "./app/store";
import store from "./app/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./layout/ScrollToTop";
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="322762283450-vd7agq6rmri1s0h06gi7ffg4aher31nm.apps.googleusercontent.com">
    <Provider store={store}>
      <BrowserRouter>
        <Suspense
          fallback={
            <div style={{ display: "flex", justifyContent: "center" }}></div>
          }
        >
          <Toaster />
          <PersistGate loading={null} persistor={persistor}>
            <ScrollToTop />
            <App />
          </PersistGate>
        </Suspense>
      </BrowserRouter>
    </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
