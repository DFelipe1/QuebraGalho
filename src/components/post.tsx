import { CalendarBlank, GlobeSimple } from "@phosphor-icons/react";

export function Post() {
    return (
        <button className="w-full px-3 py-4 bg-slate-200 space-y-4 rounded-lg">
            <div className="space-y-6 w-full">
                <h3 className="text-3xl text-left text-slate-950 font-extrabold leading-none">Title</h3>
                <p className="text-base text-left font-normal text-slate-950 leading-snug">description</p>
            </div>
            <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center justify-center">
                <div className="w-8 h-w-8 overflow-hidden rounded-full">
                    <img 
                        src="http://github.com/PedroH2o.png"
                        alt="Pedro Yan"
                        className="w-full object-cover" 
                    />
                </div>
                <span className="font-bold text-base leading-snug text-slate-">
                    Pedro Yan
                </span>
            </div>
                <div className="flex gap-3">
                    <div>
                        <CalendarBlank size={20} weight="fill"/>
                    </div>
                    <div>
                        <GlobeSimple size={20}/>
                    </div>
                </div>
            </div>
        </button>
    )
}