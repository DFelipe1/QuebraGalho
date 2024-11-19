import { Service } from "./services";

export function Services() {
    return (
        <div className="w-full max-w-4xl px-2 py-4 space-y-5">
            <Service contractURL="http://localhost:5173/contract/1"/>
            <Service contractURL="http://localhost:5173/contract/1" variant="process"/>
            <Service contractURL="http://localhost:5173/contract/1" variant="danger"/>
           
        </div> 
    )
}