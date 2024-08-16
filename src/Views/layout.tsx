import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { UserRelevant } from "../components/userRelevant";
import { UserRecomend } from "../components/userRecomend";
import { useEffect } from "react";

export function Layout() {

    const navigate = useNavigate()
 
    useEffect(() => {
        const currentUrl = window.location.href;
        if(currentUrl === "http://localhost:5173/"){
            navigate('/posts')
        }
    })

    return (
        <div className="w-full">
           <Header/>
           <main className="w-full max-w-[1100px] mx-auto flex pt-24 gap-5">
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
           </main>
        </div>
    )
}