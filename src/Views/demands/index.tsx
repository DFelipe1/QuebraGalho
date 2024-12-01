import { Demand } from "./demand";

export function Demands() {
    return (
        <div className="w-full max-w-4xl px-2 py-4 space-y-5">
            <h1 className="text-xl text-left text-slate-950 font-extrabold leading-none">Minhas demandas de trabalho</h1>
            <Demand contractURL="http://localhost:5173/contract/1"/>
            <Demand contractURL="http://localhost:5173/contract/1" variant="process"/>
            <Demand contractURL="http://localhost:5173/contract/1" variant="danger"/>
        </div> 
    )
}