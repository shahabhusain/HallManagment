import React from "react";
import main from "../../assets/images/house.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoenixSquadron } from "react-icons/fa";
import { FaRestroom } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
const SingleHotelPage = () => {
  return (
   <div className=" bg-[#f3e2c6] w-full h-screen">
     <div className=" flex justify-between mx-28">
      <div className=" w-1/2 mt-32">
        <h1 className=" text-[64px] font-bold text-[#ff823e]">Khan House</h1>
        <p className=" text-[17px] font-normal">
          Distinctively re-engineer revolutionary meta-services and premium At
          vero eos et accusamus et iusto
        </p>
        <p className=" text-[17px] font-normal mt-7">
          Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
          <p className=" flex items-center gap-3 mt-6"> <span><FaRestroom /></span> Room <span>4</span></p>
          <p className=" flex items-center gap-3 mt-2"> <span><FaBed /></span> Beds <span>4</span></p>
        <p className=" flex items-center gap-4 mt-6">
          {" "}
          <span>
            <FaEnvelope />
          </span>
          dwilliam@mail.com
        </p>
        <p className=" flex items-center gap-4 mt-2">
          {" "}
          <span>
            <FaPhoenixSquadron />
          </span>
          + 716 - 560 - 1920
        </p>
      </div>
      <img className=" w-1/2 mt-32 rounded-md" src={main} alt="" />
    </div>
   </div>
  );
};

export default SingleHotelPage;
