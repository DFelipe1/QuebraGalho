import { Button } from "../../../components/button";

interface AnaliticServiceProps {
    setSteps: (string: Chat) => void
}
export function AnaliticService({ setSteps }: AnaliticServiceProps){
    return (
        <div className="w-full h-fit space-y-1">
            <strong className="text-2xl text-slate-950 font-extrabold leading-snug">
                Aceita analisar esse serviço?
            </strong>
            <form className="flex w-full gap-4">
                <Button onClick={() => setSteps('isBudget')} size="full">Aceitar</Button>
                <Button variant="secondary" size="full">Recusar</Button>
            </form>
        </div>
    )
} 