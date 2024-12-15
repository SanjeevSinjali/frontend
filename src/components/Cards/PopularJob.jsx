import React from "react";

const PopularJob = ({ logo, companyName, role }) => {
  return (
    <div className="w-[290px] h-[188px] bg-white rounded-md shadow-boxShadow flex flex-col p-3 justify-between hover:bg-highlight">
      <div className="flex flex-col text-xs gap-1">
        <div className="w-[70px] border flex">
          <img src={logo} alt={companyName} className="w-full content-center object-cover"/>
        </div>
        <p className="font-medium">{companyName}</p>
        <p>{role}</p>
      </div>
      <p className="underline cursor-pointer text-sm font-semibold">
        View Details
      </p>
    </div>
  );
};

export default PopularJob;
