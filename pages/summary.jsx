import React from "react";
import { useSnapshot } from "valtio";
import { planData } from "./plans";
import { state } from "@/state";

const summary = () => {
  const snap = useSnapshot(state);

  const selectedPlan = planData[snap.planIndex];
  return (
    <div>
      <div className="  mx-auto w-[400px] grid bg-slate-100 p-5 rounded-xl">
        <h1 className=" font-bold text-xl">Finishing up</h1>
        <p>Double-check everyhthing looks OK before confirming</p>
        <div className=" bg-slate-400  rounded-md">
          <div className=" border-b-2 border-slate-300 font-bold flex justify-between p-2">
            <div >
              <p className="">{selectedPlan?.name}</p>
              <p className=" ">Change</p>
            </div>
            <p>{selectedPlan?.price}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default summary;
