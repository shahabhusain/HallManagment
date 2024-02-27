import React from 'react'
import main from "../../assets/images/Image (5).png";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoenixSquadron } from "react-icons/fa";
const SingleUserPage = () => {
  return (
    <div className=" flex items-center justify-between mx-28">
    <div className=" w-1/2">
      <h1 className=" text-[64px] font-bold text-[#F39D12]">Elena Gilberts</h1>
      <p className=" text-[17px] font-normal">
        Distinctively re-engineer revolutionary meta-services and premium At
        vero eos et accusamus et iusto
      </p>
      <p className=" text-[17px] font-normal mt-7">
        Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
        atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>

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
    <img className=" w-1/2" src={main} alt="" />
  </div>
  )
}

export default SingleUserPage