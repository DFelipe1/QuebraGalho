import { Service } from "./services";

export function Services() {
    return (
        <div className="w-full max-w-4xl px-2 py-4 space-y-5">
            <h1 className="text-xl text-left text-slate-950 font-extrabold leading-none">Meus pedidos de serviço</h1>
            <Service contractURL="/contract/1"/>
            <Service contractURL="/contract/1" variant="process"/>
            <Service contractURL="/contract/1" variant="danger"/>
           
        </div> 
    )
}