import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className=" mx-auto w-[400px] grid bg-slate-100 p-5 rounded-xl">
        <h1 className=" font-bold text-xl">Personal info</h1>
        <p className=" text-slate-500">please provide your name, email adress and phone number.</p>
        <form className=" grid gap-4" > 
          <label className="grid text-blue-950">
            {" "}
            Name
            <input 
            className=" p-1 rounded-md border-2 border-slate-550"
            type="text" />
          </label>
          <label className="grid text-blue-950">
            {" "}
            Email Adress
            <input 
            className=" p-1 rounded-md border-2 border-slate-550"
            type="text" />
          </label>
          <label className="grid text-blue-950">
            {" "}
            Phone Number
            <input
            className=" p-1 rounded-md border-2 border-slate-550"
            type="number" />
          </label>
        </form>
      </div>
    </div>
  );
}
