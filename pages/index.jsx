import { useRouter } from "next/router";
import { snapshot, useSnapshot } from "valtio";
import { state } from "@/state";

export default function Home() {
  const snap = useSnapshot(state);
  const router = useRouter();
  return (
    <form 
    onSubmit={(e) => {e.preventDefault()
      router.push("/addons");
    
    }}
    className=" mx-auto w-[400px] ">
      <div className=" mx-auto w-[400px] grid bg-slate-100 -translate-y-20 p-5 rounded-xl">
        <h1 className=" font-bold text-xl">Personal info</h1>
        <p className=" text-slate-500">
          please provide your name, email adress and phone number.
        </p>
        <div className=" grid gap-4">
          <label className="grid text-blue-950">
            {" "}
            Name
            <input
              value={snap.name}
              className=" p-1 rounded-md border-2 border-slate-550"
              type="text"
              required
              onChange={(e) => {
                state.name = e.target.value;
              }}
            />
          </label>
          <label className="grid text-blue-950">
            {" "}
            Email Adress
            <input
              value={snap.email}
              className=" p-1 rounded-md border-2 border-slate-550"
              type="text"
              required
              onChange={(e) => {
                state.email = e.target.value;
              }}
            />
          </label>
          <label className="grid text-blue-950">
            {" "}
            Phone Number
            <input
             
              value={snap.number}
              className=" p-1 rounded-md border-2 border-slate-550"
              type="number"
              required
              onChange={(e) => {
                state.number = e.target.value;
              }}
            />
          </label>
        </div>
      </div>
      <div className=" p-2 mt-10 flex justify-end">
        <button
        
          className=" text-white bg-blue-900 p-2 rounded-md"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}
