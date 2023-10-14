import { state } from "@/state";
import React from "react";
import { useSnapshot } from "valtio";
import { useRouter } from "next/router";

export const addonData = [
  {
    title: "Online service",
    feature: "Acces to multiplayer game",
    price: 10,
    priceY: 100,
  },
  {
    title: "Large storage",
    feature: "Extra 1TB of cloud save",
    price: 20,
    priceY: 200,
  },
  {
    title: "Customizable profile",
    feature: "Custom theme on your profile",
    price: 20,
    priceY: 200,
  },
];

export default function addons() {
  const snap = useSnapshot(state);
  const router = useRouter();
  const isYearly = snap.duration === "yearly";

  return (
    
    <div className="bg-slate-300  mx-auto w-[600px] ">
      <div className=" -translate-y-20  mx-auto w-[400px] grid bg-white p-5 rounded-xl">
        <h1 className=" font-bold text-xl">Pick add-ons</h1>
        <p>Add-ons helb enhance your gaming experience.</p>
        <div className=" grid gap-4">
          {addonData.map((addon, idx) => (
            <div
              onClick={() => {
                if (state.addons[idx]) {
                  state.addons[idx] = false;
                } else {
                  state.addons[idx] = true;
                }
              }}
              key={addon.title}
              className={` cursor-pointer flex justify-between p-4   px-6 items-center border  hover:border-blue-500 border-black rounded-md${
                snap.addons[idx] ? " border-2 border-blue-500" : ""
              }`}
            >
              <input
                checked={snap.addons[idx]}
                className=" h-5 w-5"
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    state.addons[idx] = true;
                  } else {
                    state.addons[idx] = false;
                  }
                }}
              />
              <div>
                <p>{addon.title}</p>
                <p>{addon.feature}</p>
              </div>
              ${isYearly ? addon.priceY : addon.price}
              {isYearly ? "/yr" : "/mo"}
            </div>
          ))}
        </div>
      </div>
      <div  className=" bg-white mx-auto w-[600px]">
      <div className=" w-[400px]  mx-auto bg-white mt-10 p-4 flex justify-between">
        <button
        onClick={()=>{
          router.push('/plans')
        }}
        >Go back</button>
        <button 
        onClick={()=>{
          router.push('/summary')
        }}
        className=" text-white bg-blue-900 p-2 rounded-md">
          Next Step
        </button>
      </div>
    </div>
    </div>
  );
}
