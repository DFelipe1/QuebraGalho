import { FunnelSimple } from "@phosphor-icons/react";
import { PostFeed } from "../../components/post";

export function Home() {

    return (
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
                <PostFeed/>
                <PostFeed/>
                <PostFeed/>
            </div>
        </div> 
    )
}
  