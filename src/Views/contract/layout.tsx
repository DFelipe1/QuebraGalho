import { Outlet } from "react-router-dom";

export function LayoutContract() {
    return (
        <div className="w-full h-full px-2 py-4 flex justify-center items-center">
            <Outlet/>
        </div>
    )
}