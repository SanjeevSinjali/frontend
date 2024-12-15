import React from "react";
import { FaBriefcase, FaClock, FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const JobCard = ({
  id,
  logo,
  name,
  expiryDate,
  role,
  location,
  salary,
  jobLevel,
  jobType,
  shift,
}) => {
  return (
    <div className="w-[384px] h-[342px] bg-white rounded p-3 flex flex-col gap-5">
      <div className="flex gap-3 ">
        <div className="w-[67px] h-[67px] flex">
          <img
            src={"http://127.0.0.1:8000" + logo}
            alt={name}
            className="object-cover content-center w-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="font-medium">{name}</h6>
          <p className="text-sm text-mainColor">Apply Before: {expiryDate}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-xs">
        <h6 className="font-medium text-lg">{role}</h6>
        <p>
          Job Location: <span className="text-mainColor">{location}</span>
        </p>
        <p>
          Offered Salary: <span className="text-mainColor">{salary}</span>
        </p>
        <p>
          Job Level: <span className="text-mainColor">{jobLevel}</span>
        </p>
      </div>
      <div className="flex gap-4 text-sm">
        <div className="bg-lightBg px-4 py-2 flex gap-2 rounded items-center">
          <FaBriefcase />
          <span className="text-mainColor">{jobType}</span>
        </div>
        <div className="bg-lightBg px-4 py-2 flex gap-2 rounded items-center">
          <FaClock />
          <span className="text-mainColor">{shift}</span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <Link to={`/job-details/${id}`}>
          <div className="bg-mainColor text-white px-3 py-2 rounded hover:bg-hoverColor">
            View Details
          </div>
        </Link>
        <button type="button" className="bg-lightColor rounded p-3">
          <FaRegHeart className="text-mainColor"/>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
