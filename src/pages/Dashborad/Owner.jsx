import React from "react";
import main from '../../assets/images/Ellipse 16.png'
import { BsThreeDotsVertical } from "react-icons/bs";
const Owner = () => {
  return <div className=" ml-60 mx-12 w-[100%]">
    <h1 className=" text-[22px] font-bold mt-5">Owner</h1>
    <div className=' flex flex-col gap-7 mt-12 bg-[#f8f8f8] rounded-2xl pr-[3.5rem] py-[2.5rem]'>
    <h1 className=' text-[22px] font-bold ml-6'>All Owners</h1>
       
       <table className='  bg-white ml-6 rounded-2xl w-[100%]'>
        
    <tr>
    <th className=' text-[#949494] text-[14px] font-normal'>Name</th>
    <th className=' text-[#949494] text-[14px] font-normal'>Number</th>
    <th className=' text-[#949494] text-[14px] font-normal'>Address</th>
    <th className=' text-[#949494] text-[14px] font-normal'>Account</th>
    <th className=' text-[#949494] text-[14px] font-normal'>Actions</th>
    </tr>
     <tr className=' hover:bg-[#f4eeea94]'>
    <td className=' flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
    <td>+9921487982487</td>
    <td>curtis.weaver@example.com</td>
    <td>Free User</td>
   <td><button className=' bg-red-500 text-white py-1 px-4 rounded-md'>Delete</button></td>
    </tr>
    
    <tr className=' hover:bg-[#f4eeea94]'>
    <td className=' flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
    <td>+9921487982487</td>
    <td>curtis.weaver@example.com</td>
    <td>Free User</td>
   <td><button className=' bg-red-500 text-white py-1 px-4 rounded-md'>Delete</button></td>
    </tr>

    <tr className=' hover:bg-[#f4eeea94]'>
    <td className=' flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
    <td>+9921487982487</td>
    <td>curtis.weaver@example.com</td>
    <td>Free User</td>
   <td><button className=' bg-red-500 text-white py-1 px-4 rounded-md'>Delete</button></td>
    </tr>

    <tr className=' hover:bg-[#f4eeea94]'>
    <td className=' flex gap-4 items-center'><img src={main} alt="" />Albert Flores </td>
    <td>+9921487982487</td>
    <td>curtis.weaver@example.com</td>
    <td>Free User</td>
   <td><button className=' bg-red-500 text-white py-1 px-4 rounded-md'>Delete</button></td>
    </tr>
    

     

     
    </table>
       </div>
       
  </div>;
};

export default Owner;
