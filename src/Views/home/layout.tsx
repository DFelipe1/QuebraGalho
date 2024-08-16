import { Outlet } from "react-router-dom";
import { UserRelevant } from "../../components/userRelevant";
import { UserRecomend } from "../../components/userRecomend";

export function LayoutHome() {

    return (
        <>
            <Outlet/>
            <aside className="w-72 py-4 space-y-5">
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
                    <div className="w-full space-y-3 mt-4">
                        <UserRecomend/>
                        <UserRecomend/>
                        <UserRecomend/>
                    </div>
                </div> 
            </aside>        
        </>
    )
}
  