import { ChangeEvent, FormEvent } from "react";
import { Button } from "../../../components/button";
import { PaperPlaneTilt } from "@phosphor-icons/react";

interface ChatProps {
    handleMessageChanged: (e: ChangeEvent<HTMLInputElement>) => void;
    handleNewMassage: (e: FormEvent<HTMLFormElement>) => void
}
export function ChatStep({ handleMessageChanged ,handleNewMassage }: ChatProps){
    return (
        <div className="w-full h-fit space-y-1">
            <strong className="text-base text-slate-500 font-normal leading-relaxed">
                Ofereça seu preço e data da visita
            </strong>
            <form 
                onSubmit={e => handleNewMassage(e)}
                action=""
                className="w-full p-3 rounded-lg flex justify-between bg-slate-700 gap-4"
            >
                <input 
                    type="text"
                    name="message"
                    className="w-full bg-transparent outline-none text-slate-200 leading-normal"
                    placeholder="Digite sua mensagem aqui"
                    onChange= {(e) => handleMessageChanged(e)}
                />
                <Button type="submit">
                    <PaperPlaneTilt size={20} weight="fill"/>
                </Button>
            </form>
        </div>
    )
} 