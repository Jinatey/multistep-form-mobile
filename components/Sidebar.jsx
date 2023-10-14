import React from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const sideData = [
  { path: "/" },
  { path: "/plans" },
  { path: "/addons" },
  { path: "/summary" },
];

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className=" backImg h-[200px]  w-[600px] mx-auto">
      <div className=" cursor-pointer bgImag    flex gap-10 justify-center  ">
        {sideData.map((side, idx) => (
          <div
            onClick={() => {
              router.push(side.path);
            }}
            className={` text-white mb-6 mt-10 flex items-center border rounded-full p-4  h-10${
              side.path === router.pathname ? " text-blue-900 font-bold bg-blue-100 " : ""
            }`}
          >
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
