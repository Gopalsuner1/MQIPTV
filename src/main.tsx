import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
// import {store} from './store/store'
import { Provider } from "react-redux";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </Provider> */}
    </QueryClientProvider>
  </React.StrictMode>
);
