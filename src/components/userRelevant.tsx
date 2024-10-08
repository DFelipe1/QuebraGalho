import { Star, StarHalf } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function UserRelevant() {
    return (
        <Link to="/profile/userName" className="w-full flex flex-col gap-4 bg-slate-50 rounded-lg p-4 shadow">
            <div className="flex gap-3 items-center">
                <img 
                    src="http://github.com/Maykbrito.png" 
                    alt="" 
                    className="w-14 h-14 rounded-full"
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
                <StarHalf size={20} weight="fill"/>
                <Star size={20}/>
            </div>
        </Link>
    )
}