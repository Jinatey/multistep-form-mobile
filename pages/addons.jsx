import { state } from "@/state";
import React from "react";
import { useSnapshot } from "valtio";
const addonData = [
  { title: "Online service", feature: "Acces to multiplayer game", price: 10 },
  { title: "Large storage", feature: "Extra 1TB of cloud save", price: 20 },
  {
    title: "Customizable profile",
    feature: "Custom theme on your profile",
    price: 20,
  },
];

export default function addons() {
  const snap = useSnapshot(state);

  return (
    <div className="   mx-auto w-[400px] grid bg-slate-100 p-5 rounded-xl">
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
            {addon.price}
          </div>
        ))}
      </div>
    </div>
  );
}
