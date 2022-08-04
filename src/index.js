import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import theme from './theme/theme'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DepartmentProvider } from "./contexts/departmentContext";
import { SettingsProvider } from "./contexts/SettingsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsProvider>
        <DepartmentProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </DepartmentProvider>
      </SettingsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
