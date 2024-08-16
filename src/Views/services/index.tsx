import { Service } from "./services";

export function Services() {
    return (
        <div className="w-full max-w-4xl px-2 py-4 space-y-5">
            <Service/>
            <Service variant="process"/>
            <Service variant="danger"/>
           
        </div> 
    )
}