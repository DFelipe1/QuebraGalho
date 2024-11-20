import { Button } from "../../../components/button";

interface NeedBudgetProps {
    setSteps: (string: Chat) => void
}
export function NeedBudget({ setSteps }: NeedBudgetProps){
    return (
        <div className="w-full h-fit space-y-1">
            <strong className="text-2xl text-slate-950 font-extrabold leading-snug">
                Precisa fazer orçamento previo?
            </strong>
            <form className="flex w-full gap-4">
                <Button onClick={() => setSteps('message')} size="full">Aceitar</Button>
                <Button onClick={() => setSteps('isFinal')} variant="secondary" size="full">Recusar</Button>
            </form>
        </div>
    )
} 