import { FunnelSimple } from "@phosphor-icons/react";
import { Header } from "../../components/header";
import { Post } from "../../components/post";
import { UserRelevant } from "../../components/userRelevant";
import { UserRecomend } from "../../components/userRecomend";

export function Home() {

    return (
        <div className="w-full">
           <Header/>
           <main className="w-full max-w-[1100px] mx-auto flex pt-24 gap-5">
            <div className="w-full px-2 py-4 space-y-5">
                <div className="w-full flex gap-4 items-center">
                    <button className="px-1.5 py-1 bg-slate-200 border border-slate-950 rounded-lg hover:brightness-105 text-slate-950"> 
                        <FunnelSimple size={20} weight="bold" />
                    </button>
                    <span className="px-1.5 py-1 bg-slate-200 border border-slate-950 rounded-lg text-slate-950 text-sm font-semibold hover:brightness-105">
                        Recentes
                    </span>
                </div> 
                <div className="flex flex-col gap-4">
                   <Post/>
                   <Post/>
                   <Post/>
                </div>
            </div>  
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
  