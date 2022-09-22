import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="bg-[#121212]">
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="relative px-12">
          <Sidebar />
          <div className="container pl-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}