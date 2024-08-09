import { Bell, Chats, GearSix, Handshake, House, MagnifyingGlass, SignOut, UserCircle, Wrench } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import Icone from '../assets/logos/icone.svg';

export function Header(){


    return (
        <header className="w-full relative">
            <aside className="fixed top-0 right-0 w-[94%] h-fit py-5 px-6 bg-primary flex justify-between items-center">
                <div className="w-full max-w-md rounded-lg overflow-hidden flex bg-slate-100">
                    <input 
                        type="text" 
                        className="w-full bg-transparent px-4 py-2 outline-none"
                    />
                    <button className="w-fit px-4 py-2 bg-secondary-400 hover:brightness-110">
                        <MagnifyingGlass size={20}/>
                    </button>
                </div>

                <div className="flex gap-6 items-center">
                    <Link 
                        to="/"
                        className="p-2 text-slate-100 hover:brightness-110"
                    >
                        <Bell size={20} weight="fill"/>
                    </Link>
                    <Link 
                        to="/"
                        className="p-2 text-slate-100 hover:brightness-110"
                    >
                        <GearSix size={20} weight="fill"/>
                    </Link>

                    <div className="flex gap-2 items-center justify-center">
                        <span className="font-bold text-base leading-snug text-slate-100">
                            David Felipe
                        </span>
                        <div className="w-14 h-14 overflow-hidden rounded-full">
                            <img 
                                src="https://github.com/DFelipe1.png" 
                                alt="David Felipe" 
                                className="w-full object-cover" 
                            />
                        </div>
                    </div>
                </div>
            </aside>
            <aside className="fixed top-0 left-0 bottom-0 w-fit h-full py-5 px-4 bg-primary flex flex-col justify-between items-center">
                <div className="w-14">
                    <img src={Icone} alt="" className="w-full object-cover" />
                </div>

                <nav className="flex flex-col gap-7">
                    <Link to="/" className="w-fit h-fit text-slate-100 p-2 rounded-full bg-secondary-300 border border-secondary-300 hover:brightness-110">
                        <House size={28} weight="fill"/>
                    </Link>
                    <Link to="/" className="w-fit h-fit text-slate-100 p-2 hover:brightness-110">
                        <Chats size={28} weight="fill"/>
                    </Link>
                    <Link to="/" className="w-fit h-fit text-slate-100 p-2 hover:brightness-110">
                        <UserCircle size={28} weight="fill"/>
                    </Link>
                    <Link to="/" className="w-fit h-fit text-slate-100 p-2 hover:brightness-110">
                        <Handshake size={28} weight="fill"/>
                    </Link>
                    <Link to="/" className="w-fit h-fit text-slate-100 p-2 hover:brightness-110">
                        <Wrench size={28} weight="fill"/>
                    </Link>
                </nav>

                <div className="w-fit h-fit text-slate-100 p-2 bg-slate-700 rounded-lg hover:brightness-110">
                    <SignOut size={20}/>
                </div>
            </aside>
    </header>
    )
}