import { Check, X } from "@phosphor-icons/react";
import { Button } from "../../components/button";
import { useState } from "react";

export function Contract() {
    
    const [isConfirmContract, setIsConfirmContract] = useState<boolean | undefined>(undefined)

    return (
        <div className="w-full max-w-2xl space-y-4">
            <h1 className="w-full text-center text-2xl font-extrabold text-slate-950 leading-none">Contrato</h1>
            <div className="space-y-2">
                <h3 className="text-xl text-slate-900 font-extrabold leading-snug">Termos:</h3>
                <p className="text-base text-slate-900 font-normal leading-relaxed">Lorem ipsum dolor sit amet consectetur. Dolor vivamus vestibulum quis sem hendrerit donec nascetur tellus. Etiam dolor mauris in proin mattis dignissim id. Dui sapien nullam sed at aenean volutpat egestas dolor. At faucibus non urna suspendisse mi enim quis eget. Euismod nunc ac vitae venenatis. Facilisis dignissim venenatis sed pulvinar faucibus hendrerit dui nisi. Ut enim ut et aenean ullamcorper arcu nulla. Amet aenean arcu sociis amet quam a sed.
                Adipiscing ipsum magna felis est eget porta fermentum. Ultrices risus vitae tincidunt quisque. Ac viverra nisl amet bibendum praesent dolor. Mauris quis nunc neque at in adipiscing donec. Massa tortor rhoncus ipsum ac sapien. A fringilla euismod ornare tristique mauris at aliquam ut porta.</p>
            </div>
            <div className="space-y-2">
                <h3 className="text-xl text-slate-900 font-extrabold leading-snug">Situação:</h3>
                <p className="text-base text-slate-900 font-normal leading-relaxed">Lorem ipsum dolor sit amet consectetur. Dolor vivamus vestibulum quis sem hendrerit donec nascetur tellus. Etiam dolor mauris in proin mattis dignissim id. Dui sapien nullam sed at aenean volutpat egestas dolor. At faucibus non urna suspendisse mi enim quis eget. Euismod nunc ac vitae venenatis. Facilisis dignissim venenatis sed pulvinar faucibus hendrerit dui nisi. Ut enim ut et aenean ullamcorper arcu nulla. Amet aenean arcu sociis amet quam a sed.
                Adipiscing ipsum magna felis est eget porta fermentum. Ultrices risus vitae tincidunt quisque. Ac viverra nisl amet bibendum praesent dolor. Mauris quis nunc neque at in adipiscing donec. Massa tortor rhoncus ipsum ac sapien. A fringilla euismod ornare tristique mauris at aliquam ut porta.</p>
            </div>
            <div className="space-y-2">
                <h3 className="text-xl text-slate-900 font-extrabold leading-snug">Prazo:</h3>
                <strong className="text-base text-slate-900 font-semibold leading-relaxed">22/03/2025</strong>
            </div>
            <div className="space-y-2">
                <h3 className="text-xl text-slate-900 font-extrabold leading-snug">Valor:</h3>
                <strong className="text-base text-slate-900 font-semibold leading-relaxed">R$ 500,00</strong>
            </div>

            <div className="space-y-3">
                <span className="text-slate-900 text-base font-bold">
                    Assinatura do prestador do serviço
                </span>
                <div className="w-fit px-3 py-2 rounded-lg bg-success-light text-success flex gap-4  items-center">
                    <div className="flex gap-3 items-center">
                        <img 
                            src="http://github.com/Maykbrito.png" 
                            alt="" 
                            className="w-14 h-14 rounded-full"
                        />
                        <div className="flex flex-col gap-1">
                            <span className="text-base text-slate-900 font-bold">Mayk Brito</span>
                        </div>
                    </div>
                    <Check size={24} weight="bold"/>
                </div>

                <span className="text-slate-900 text-base font-bold">
                    Concorda com esse contrato? deseja assinar?
                </span>
                {isConfirmContract === undefined && (
                    <form className="flex w-full gap-4">
                        <Button size="full" onClick={() => setIsConfirmContract(true)}>Aceitar</Button>
                        <Button variant="secondary" size="full" onClick={() => setIsConfirmContract(false)}>Recusar</Button>
                    </form>
                )}
                {isConfirmContract && (
                     <div className="w-fit px-3 py-2 rounded-lg bg-success-light text-success flex gap-4  items-center">
                        <div className="flex gap-3 items-center">
                            <img 
                                src="http://github.com/Maykbrito.png" 
                                alt="" 
                                className="w-14 h-14 rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                                <span className="text-base text-slate-900 font-bold">Mayk Brito</span>
                            </div>
                        </div>
                        <Check size={24} weight="bold"/>
                    </div>
                ) }
                {isConfirmContract === false && (
                    <div className="w-fit px-3 py-2 rounded-lg bg-danger-light text-danger flex gap-4  items-center">
                        <div className="flex gap-3 items-center">
                            <img 
                                src="http://github.com/Maykbrito.png" 
                                alt="" 
                                className="w-14 h-14 rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                                <span className="text-base text-slate-900 font-bold">Mayk Brito</span>
                            </div>
                        </div>
                        <X size={24} weight="bold"/>
                    </div>
                ) }
            </div>
        </div>
    )
}