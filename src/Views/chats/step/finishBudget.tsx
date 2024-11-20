import { Button } from "../../../components/button";

interface FinishBudgetProps {
    setSteps: (step: Chat) => void
}
export function FinishBudget({ setSteps }: FinishBudgetProps){
    return (
        <div className="w-full h-fit space-y-1">
             <strong className="text-2xl text-slate-950 font-extrabold leading-snug">
                Deseja finalizar orçamento?
            </strong>
            <form className="flex w-full gap-4">
                <Button onClick={() => setSteps('acceptedBudget')} size="full">Aceitar</Button>
                <Button onClick={() => setSteps('message')} variant="secondary" size="full">Recusar</Button>
            </form>
        </div>
    )
} 