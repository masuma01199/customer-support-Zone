import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="max-w-[1200px] mx-auto flex justify-between items-center mt-6 p-4 gap-[20px]">
      {/* In Progress Card */}
      <div className="flex flex-1 justify-between items-center rounded-2xl bg-[#422AD5] p-6">
        <div>
          {" "}
          <img src={vector1} alt="" />{" "}
        </div>
        <div>
          <p className="text-white text-xl">InProgress</p>
          <p className="font-bold text-2xl text-center text-white">
            {inProgressCount}
          </p>
        </div>
        <div>
          {" "}
          <img src={vector2} alt="" />{" "}
        </div>
      </div>

      {/* Resolved Card */}
      <div className="flex flex-1 justify-between items-center rounded-2xl bg-gradient-to-r from-[#54CF68] to-[#00827A] p-6">
        <div>
          {" "}
          <img src={vector1} alt="" />{" "}
        </div>
        <div>
          <p className="text-white text-xl">Resolved</p>
          <p className="font-bold text-2xl text-center text-white">
            {resolvedCount}
          </p>
        </div>
        <div>
          {" "}
          <img src={vector2} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};
export default Banner;
