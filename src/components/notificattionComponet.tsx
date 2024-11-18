import { Handshake, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function NotificationComponent() {
    return (
        <Link to="http://localhost:5173/chats/1" className="w-full px-3 py-5 rounded-lg flex gap-4 items-start bg-secondary-200">
            <div className="w-fit h-fit p-4 bg-secondary-300 text-slate-900 rounded-lg">
                <Handshake size={48} weight="fill"/>
            </div>
            <div className="w-full space-y-3">
                <strong className="w-full text-lg font-extrabold text-slate-950 leading-snug"> Broklin quer contratar seus serviços! </strong>
                <p className="w-full text-base text-slate-900 leading-normal">Lorem ipsum dolor sit amet consectetur. Facilisis nisl urna imperdiet suspendisse. Habitasse non id eu at consectetur.</p>
            </div>
            <button className="w-fit h-fit">
                <X size={20}/>
            </button>
        </Link>
    )
}