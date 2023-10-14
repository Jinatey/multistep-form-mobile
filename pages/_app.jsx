import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
export default function App({ Component, pageProps }) {
  return (
    <div className="bg-black  w-[600px] mx-auto">
        <Sidebar />
      <div className=" bg-slate-300">

        <Component {...pageProps} />
      </div>
    </div>
  );
}
