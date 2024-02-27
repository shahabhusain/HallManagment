import React from "react";
import { FaFilter } from "react-icons/fa";

const Form = () => {
  return (
    <div className=" md:mx-60 mx-12 mt-24">
      <h1 className=" text-[55px] font-bold text-center mb-6">Form</h1>
      <form className=" flex flex-col gap-6 ">
        <input
          className="in outline-[#9d7638]"
          type="name"
          placeholder="Name"
        />
        <input
          className="in outline-[#9d7638]"
          type="text"
          placeholder="Address"
        />
        <input
          className="in outline-[#9d7638]"
          type="name"
          placeholder="Owner Name"
        />
        <input
          className="in outline-[#9d7638]"
          type="number"
          placeholder="Capacity"
        />
        <select className=" in outline-[#9d7638]">
          <option  value="default">Amenities</option>
          <option value="WIFI">WIFI</option>
          <option value="Project">Project</option>
          <option value="AC">AC</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
