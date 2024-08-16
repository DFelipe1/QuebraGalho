import { Demand } from "./demand";

export function Demands() {
    return (
        <div className="w-full max-w-4xl px-2 py-4 space-y-5">
            <Demand/>
            <Demand variant="process"/>
            <Demand variant="danger"/>
           
        </div> 
    )
}