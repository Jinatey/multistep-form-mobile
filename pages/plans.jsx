import React from "react";
import { snapshot, useSnapshot } from "valtio";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/router";
import { state } from "@/state";
export const planData = [
  { name: "Arcade", price: 2, priceY: 20, img: "/icon-arcade.svg" },
  { name: "Advanced", price: 5, priceY: 50, img: "/icon-advanced.svg" },
  { name: "Pro", price: 6, priceY: 60, img: "/icon-pro.svg" },
];

const plans = () => {
  const snap = useSnapshot(state);
  const router = useRouter();
  return (
    <div className=" mx-auto w-[600px] ">
      <div className=" -translate-y-20  mx-auto w-[400px] grid bg-slate-100 p-5 rounded-xl">
        <h1 className=" font-bold text-xl">Slect Your Plan</h1>
        <p>You have the option of monthly or yearly bililng</p>
        <div>
          {planData.map((plan, idx) => (
            <div
              className={` cursor-pointer m-2 border p-3 rounded-lg flex gap-5${
                snap.planIndex === idx
                  ? "border-2 flex gap-5 border-blue-600"
                  : ""
              } `}
              key={plan.name}
              onClick={() => {
                state.planIndex = idx;
              }}
            >
              <img src={plan.img} alt="" />
              <div>
                <p className=" text-blue-950 font-bold">{plan.name}</p>
                <p className=" text-slate-500">
                  {snap.duration === "yearly"
                    ? `$${plan.priceY}/y`
                    : `$${plan.price}/mo`}
                </p>
                {snap.duration === "yearly" && <p>2 months free</p>}
              </div>
            </div>
          ))}
          <div className=" flex justify-center gap-4 p-5 rounded-md mt-10 bg-slate-200">
            <p
              className={`font-bold ${
                snap.duration === "monthly"
                  ? " text-blue-950"
                  : "text-slate-500"
              }`}
            >
              Monthly
            </p>

            <Switch
              checked={snap.duration === "yearly"}
              onChange={(isChecked) => {
                if (isChecked) {
                  state.duration = "yearly";
                } else {
                  state.duration = "monthly";
                }
              }}
              className={`${
                snap.duration === "yearly" ? "bg-blue-800" : "bg-blue-700"
              } relative inline-flex w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  snap.duration === "yearly" ? "translate-x-6" : "translate-x-1"
                } inline-block  w-4 transform rounded-full bg-white transition`}
              />
            </Switch>

            <p
              className={`font-bold ${
                snap.duration === "yearly" ? " text-blue-950" : "text-slate-500"
              }`}
            >
              Yearly
            </p>
          </div>
        </div>
      </div>
      <div className="  font-bold text-slate-600 bg-pink-200 p-4 mt-10 flex justify-between">
        <div className="flex gap-52 m-auto">
          <button
            onClick={() => {
              router.push("/");
            }}
          >
            Go back
          </button>
          <button
            onClick={async () => {
              if (
                ["Arcade", "Pro", "Advanced"].includes(
                  planData[snap.planIndex]?.name
                )
              ) {
                await router.push("/addons");
              } else {
                alert("please  select a plan");
              }
            }}
            className=" text-white bg-blue-900 p-2 rounded-md"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default plans;
