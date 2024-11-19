import { Handshake, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

interface NotificationComponentProps {
    title: string
    message: string
    linkURL: string 
}

export function NotificationComponent({ title, message, linkURL}: NotificationComponentProps) {
    return (
        <Link to={linkURL} className="w-full px-3 py-5 rounded-lg flex gap-4 items-start bg-secondary-200">
            <div className="w-fit h-fit p-4 bg-secondary-300 text-slate-900 rounded-lg">
                <Handshake size={48} weight="fill"/>
            </div>
            <div className="w-full space-y-3">
                <strong className="w-full text-lg font-extrabold text-slate-950 leading-snug"> {title} </strong>
                <p className="w-full text-base text-slate-900 leading-normal">{message}</p>
            </div>
            <button className="w-fit h-fit">
                <X size={20}/>
            </button>
        </Link>
    )
}