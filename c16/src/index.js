import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";

import Expenses from "./Expenses";
import Invoices from "./Invoices";
import App from "./App";
import InvoiceItem from "./InvoiceItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<InvoiceItem />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Oups we couldnt go anywhere from here</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
