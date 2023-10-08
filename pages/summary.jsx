import React from "react";
import { useSnapshot } from "valtio";
import { planData } from "./plans";
import { state } from "@/state";
import { addonData } from "./addons";
const summary = () => {
  const snap = useSnapshot(state);

  const selectedPlan = planData[snap.planIndex];

  const isYearly = snap.duration === "yearly";
  const selectedPrice = isYearly ? selectedPlan.priceY : selectedPlan?.price;
  return (
    <div>
      <div className="  mx-auto w-[400px] grid bg-slate-100 p-5 rounded-xl">
        <h1 className=" font-bold text-xl">Finishing up</h1>
        <p>Double-check everyhthing looks OK before confirming</p>
        <div className=" bg-slate-400  rounded-md">
          <div className=" border-b border-slate-300 font-bold flex justify-between p-2">
            <div>
              <p className="">{selectedPlan?.name}</p>
              <p>Change</p>
            </div>
            <p>{selectedPrice}</p>
          </div>

          <div>
            {addonData.map((addon, idx) => {
              if (snap.addons[idx]) {
                return (
                  <div className=" flex justify-between p-2">
                    <div>
                      <p>{addon.title}</p>
                    </div>
                  <p>{isYearly?`+$${addon.priceY}/yr`:`+$${addon.price}/mo`}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default summary;
