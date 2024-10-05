import { Link } from "react-router-dom";

export function UserRecomend() {
    return (
        <Link to="/profile/username" className="w-full flex flex-col gap-4 bg-slate-50 rounded-lg p-4 shadow">
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
        </Link>
    )
}