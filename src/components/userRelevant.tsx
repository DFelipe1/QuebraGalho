import { Star, StarHalf } from "@phosphor-icons/react";

export function UserRelevant() {
    return (
        <div className="w-full flex flex-col gap-4 bg-slate-200 rounded-lg p-4">
            <div className="flex gap-3 items-center">
                <img 
                    src="http://github.com/Maykbrito.png" 
                    alt="" 
                    className="w-14 h-w-14"
                />
                <div className="flex flex-col gap-1">
                    <span className="text-base text-slate-900 font-bold">Mayk Brito</span>
                    <span className="text-sm text-slate-900 font-semibold">Filmaker</span>
                </div>
            </div>
            <div className="w-full flex justify-center gap-3">
                <Star size={20} weight="fill"/>
                <Star size={20} weight="fill"/>
                <Star size={20} weight="fill"/>
                <Star size={20} weight="fill"/>
                <StarHalf size={20} weight="fill"/>
                <Star size={20}/>
            </div>
        </div>
    )
}