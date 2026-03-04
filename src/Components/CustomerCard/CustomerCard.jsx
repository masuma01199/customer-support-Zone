import React from "react";

const CustomerCard = ({ data }) => {
  return (
    <div className=" shadow-lg">
      <div className="p-3 mt-3 ">
        <div className="flex justify-between text-center mt-3">
          <h2 className="card-title">{data.title}</h2>
          <button className="btn border-none rounded-4xl bg-[#B9F8CF] text-[#0B5E06]">
            {data.status}
          </button>
        </div>
        <p className="text-[#627382] text-sm mt-2">{data.description}</p>
        <div className="flex justify-between text-center mt-2">
          <div className="flex gap-2">
            {" "}
            <p className="text-[#627382]">#{data.id}</p>
            <p>{data.priority}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-[#627382]">{data.customer}</p>
            <p>
              <i class="fa-regular fa-calendar"></i>
              <span className="text-[#627382]">{data.createdAt}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
