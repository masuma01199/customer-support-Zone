import React, { use } from "react";
import CustomerCard from "../CustomerCard/CustomerCard";

const CustomerService = ({
  customerPromise,
  inProgress,
  resolved,
  handleAddToProgress,
  handleComplete,
}) => {
  const allData = use(customerPromise);

  // Filter the main list: remove tickets that are inProgress or resolved
  const availableTickets = allData.filter(
    (ticket) =>
      !inProgress.some((p) => p.id === ticket.id) &&
      !resolved.some((r) => r.id === ticket.id),
  );

  return (
    <div className="max-w-[1200px] mx-auto p-3 lg:flex gap-[32px]">
      {/* Left: Available Tickets */}
      <div className="lg:w-[65%]">
        <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableTickets.map((data) => (
            <div
              key={data.id}
              onClick={() => handleAddToProgress(data)}
              className="cursor-pointer"
            >
              <CustomerCard data={data} />
            </div>
          ))}
        </div>
      </div>

      {/* Right: Status Sections */}
      <div className="lg:w-[35%] space-y-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold">Task Status</h1>
          {inProgress.length === 0 ? (
            <p className="text-[#627382]">
              Select a ticket to add to Task Status
            </p>
          ) : (
            inProgress.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span className="font-medium">{item.title}</span>
                <button
                  onClick={() => handleComplete(item)}
                  className="btn btn-xs bg-[#422AD5] text-white"
                >
                  Complete
                </button>
              </div>
            ))
          )}
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h1 className="text-2xl font-bold">Resolved Task</h1>
          {resolved.length === 0 ? (
            <p className="text-[#627382]">No resolved tasks yet.</p>
          ) : (
            <ul className="list-disc ml-5">
              {resolved.map((item) => (
                <li key={item.id} className="text-green-600">
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
