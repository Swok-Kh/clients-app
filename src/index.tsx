import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider, QueryClient } from "react-query";
import ModalProvider from "./components/modal/ModalProvider";
import ClientsProvider from "./components/clients/ClientsProvider";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ClientsProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ClientsProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
