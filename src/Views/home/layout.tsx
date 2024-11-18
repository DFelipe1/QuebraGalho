import { Link, Outlet } from "react-router-dom";
import { UserRelevant } from "../../components/userRelevant";
import { UserBox } from "../../components/userBox";

export function LayoutHome() {

    return (
        <>
            <Outlet/>
            <aside className="max-sm:sr-only max-md:sr-only not-sr-only w-72 py-4 space-y-5">
                <div className="w-full">
                    <h5 className="px-2 py-1 w-full bg-primary rounded-lg">
                        <span className="text-base text-slate-100 font-bold">Usuário Relevantes</span>
                    </h5>
                    <div className="w-full space-y-3 mt-4">
                        <UserRelevant/>
                        <UserRelevant/>
                        <UserRelevant/>
                    </div>
                </div>
                <div className="w-full">
                    <h5 className="px-2 py-1 w-full bg-primary rounded-lg">
                        <span className="text-base text-slate-100 font-bold">Recomendados</span> 
                    </h5>
                    <div className="w-full flex flex-col gap-3 mt-4">
                        <Link to="/profile/username">
                            <UserBox name="Mayk Britto" imageULR="http://github.com/Maykbrito.png" occupation="filmaker"/>
                        </Link>
                        <Link to="/profile/username">
                            <UserBox name="Mayk Britto" imageULR="http://github.com/Maykbrito.png" occupation="filmaker"/>
                        </Link>
                        <Link to="/profile/username">
                            <UserBox name="Mayk Britto" imageULR="http://github.com/Maykbrito.png" occupation="filmaker"/>
                        </Link>    
                    </div>
                </div> 
            </aside>        
        </>
    )
}
  