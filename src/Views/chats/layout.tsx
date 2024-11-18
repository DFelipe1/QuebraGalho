import { Link, Outlet } from "react-router-dom";
import { UserBox } from "../../components/userBox";

export function LayoutChat() {

    return (
        <>
            <Outlet/>
            <aside className="w-72 py-4 space-y-5">
                <div className="w-full">
                    <h5 className="px-2 py-1 w-full bg-primary rounded-lg">
                        <span className="text-base text-slate-100 font-bold">Suas Conversas</span>
                    </h5>
                    <div className="w-full flex flex-col gap-3 mt-4">
                        <Link to="1">
                            <UserBox name="Mayk Britto" imageULR="http://github.com/Maykbrito.png" occupation="filmaker"/>
                        </Link>
                        <Link to="2">
                            <UserBox name="Mayk Britto" imageULR="http://github.com/Maykbrito.png" occupation="filmaker"/>
                        </Link>
                        <Link to="3">
                            <UserBox name="Mayk Britto" imageULR="http://github.com/Maykbrito.png" occupation="filmaker"/>
                        </Link>
                    </div>
                </div>
            </aside>        
        </>
    )
}
  