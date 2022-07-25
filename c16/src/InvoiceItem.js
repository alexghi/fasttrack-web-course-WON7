import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getInvoiceByNumber } from "./data/invoices";

const InvoiceItem = () => {
  const params = useParams();
  const navigate = useNavigate();
  const goToExpenses = useCallback(
    () => {
        return navigate("/expenses")
    },
    [navigate]
);

  const invoiceItem = getInvoiceByNumber(params.invoiceId);

  const { name, number, date, amount, customer } = invoiceItem;

  return (
    <div style={{ backgroundColor: "aliceblue", boxShadow: "1px 1px 5px" }}>
      <h2>
        <span>{name}</span>
      </h2>

      <div style={{ display: "flex" }}>
        <span>{number}</span>
        <span>{date}</span>
      </div>
      <div>
        <span>{amount}</span>
        <span>{customer}</span>
        <div
            style={{cursor: 'pointer', color: 'orange'}}
          onClick={goToExpenses}>
            go to expenses
        </div>
      </div>
    </div>
  );
};

export default InvoiceItem;
