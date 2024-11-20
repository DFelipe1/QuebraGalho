import { Button } from "../../../components/button";

interface AcceptedBudgetProps {
    acceptedBudget: () => void
    setSteps: (string: Chat) => void
}
export function AcceptedBudget({ acceptedBudget, setSteps }: AcceptedBudgetProps){
    return (
        <div className="w-full h-fit space-y-1">
             <strong className="text-2xl text-slate-950 font-extrabold leading-snug">
                Aceita o orçamento?
            </strong>
            <form className="flex w-full gap-4">
                <Button onClick={acceptedBudget} size="full">Aceitar</Button>
                <Button onClick={() => setSteps('isAnalitic')} variant="secondary" size="full">Recusar</Button>
            </form>
        </div>
    )
} 