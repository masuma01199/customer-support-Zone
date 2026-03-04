import React, { use } from "react";
import CustomerCard from "../CustomerCard/CustomerCard";

const CustomerService = ({ customerPromise }) => {
  const customerData = use(customerPromise);
  return (
    <div className="max-w-[1200px] mx-auto p-3 lg:flex gap-[32px]">
      <div className="w-[85%]">
        <h1 className="text-2xl font-bold">Customer Tickets</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {customerData.map((data) => (
            <CustomerCard data={data}></CustomerCard>
          ))}
        </div>
      </div>
      <div className="">
        <div>
          <h1 className="text-2xl font-bold">Task Status</h1>
          <p className="text-[#627382]">
            Select a ticket to add to Task Status
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold">Resolved Task</h1>
          <p className="text-[#627382]">No resolved tasks yet.</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
