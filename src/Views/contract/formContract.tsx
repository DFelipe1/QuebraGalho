import { Button } from "../../components/button";
import { Input } from "../../components/inputs";

export function FormContract() {
    return (
        <form 
            action=""
            className="w-full max-w-2xl space-y-4"
        >
            <h1 className="w-full text-center text-xl font-extrabold text-slate-950 leading-none">Gerar contrato</h1>
            <div className="w-full space-y-2">
                <label 
                    htmlFor=""
                    className="text-sm font-normal leading-snug text-slate-700"
                >
                    Termos de uso:*
                </label>
                <textarea 
                    name="" 
                    id=""
                    className="w-full min-h-[130px] px-3 py-3.5 rounded-md bg-slate-200 border border-slate-600/20 outline-none resize-none"
                    placeholder="Digite os termos que deseja aplicar"
                    required
                />
            </div>
            <div className="w-full space-y-2">
                <label 
                    htmlFor=""
                    className="text-sm font-normal leading-snug text-slate-700"
                >
                    Situação:
                </label>
                <textarea 
                    name="" 
                    id=""
                    className="w-full min-h-[130px] px-3 py-3.5 rounded-md bg-slate-200 border border-slate-600/20 outline-none resize-none"
                    placeholder=""
                />
            </div>
            <div className="w-full flex gap-3">
                <Input label="Prazo:*" name="Term" required/>
                <Input label="Valor:*" name="Amount" required/>
            </div>
            <Button size="full">
                Assinar
            </Button>
        </form>
    )
}