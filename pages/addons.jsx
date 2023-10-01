import React from "react";

const addonData = [
  { title: "Online service", feature: "Acces to multiplayer game", price: 10 },
  { title: "Large storage", feature: "Extra 1TB of cloud save", price: 20 },
  {
    title: "Customizable profile",
    feature: "Custom theme on your profile",
    price: 20,
  },
];

const addons = () => {
  return (
    <div className="  mx-auto w-[400px] grid bg-slate-100 p-5 rounded-xl">
      <h1 className=" font-bold text-xl">Pick add-ons</h1>
      <p>Add-ons helb enhance your gaming experience.</p>
      <div className=" grid gap-4">
      {addonData.map((addon, idx) => (
        <div>
          <div className="flex justify-between border p-5 rounded-lg pt-5">
            <input className="w-6" type="checkbox" />
            <div>
              <p>{addon.title}</p>
              <p>{addon.feature}</p>
            </div>
            {addon.price}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default addons;
