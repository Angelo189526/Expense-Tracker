import { Outlet } from "react-router-dom";
import { SideVar } from "../components/Sidevar";

export function Layout() {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">

    
      <SideVar />


      <div className="flex-1">
        <Outlet />
      </div>

    </div>
  );
}
