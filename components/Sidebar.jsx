import React from "react";
 import { useRouter } from "next/router";

const sideData = [
  { path: "/" },
  { path: "/plans" },
  { path: "/addons" },
  { path: "/summary" },
];

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="">
    <div className=" cursor-pointer bgImag mx-auto  flex gap-10 justify-center  ">
      {sideData.map((side, idx) => (
        <div 
        onClick={()=>{
          router.push(side.path)
        }}
        className=" mb-6 mt-10 flex items-center border rounded-full p-4  h-10">
          {idx + 1}
        </div>
      ))}

    </div>
    </div>
  );
};

export default Sidebar;
