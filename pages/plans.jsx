import React from "react";

const planData = [
  { name: "Arcade", price: 9, img: "/icon-arcade.svg" },
  { name: "Advanced", price: 9, img: "/icon-advanced.svg" },
  { name: "Pro", price: 9, img: "/icon-pro.svg" },
];

const plans = () => {
  return (
    <div >
      <div className="  mx-auto w-[400px] grid bg-slate-100 p-5 rounded-xl">
        <h1 className=" font-bold text-xl">Slect Your Plan</h1>
        <p>You have the option of monthly or yearly bililng</p>
        <div>{planData.map((plan, idx) => (
            <div className="">
                <div className=" m-2 border p-3 rounded-lg flex gap-5">
                    <img src={plan.img} alt="" />
                    <div>
                        <p>{plan.name}</p>
                        <p>{plan.price}</p>
                    </div>
                </div>
            </div>
        ))}</div>
      </div>
    </div>
  );
};

export default plans;
