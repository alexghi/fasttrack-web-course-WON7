import React from "react";
import { getInvoices } from "./data/invoices";
import InvoiceItem from "./InvoiceItem";
import { Link, Outlet } from "react-router-dom";

const Invoices = () => {
  const invoices = getInvoices();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {invoices.map((invoice) => (
        <Link key={invoice.number} to={`/invoices/${invoice.number}`}>
          {invoice.name}
        </Link>
      ))}
      <Outlet/>
    </div>
  );
};

export default Invoices;
