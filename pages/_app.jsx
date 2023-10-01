import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
export default function App({ Component, pageProps }) {
  return (
    <div className=" bg-yellow-600">
      <div className="backImg bg-slate-500">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
