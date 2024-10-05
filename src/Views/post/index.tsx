import { ArrowLeft, CalendarBlank, DotsThree, GlobeSimple, Mailbox, MapPin, Phone, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";
import * as Dialog from '@radix-ui/react-dialog';

export function Post() {
    return (
        <article className="w-full bg-slate-50 px-2 py-4 space-y-5 rounded-lg">
            <div className="w-full flex justify-between items-center text-zinc-600">
                <Link to='/posts'>
                    <ArrowLeft size={20}/>
                </Link>
                <button>
                    <DotsThree size={20} weight="bold"/>
                </button>
            </div>
            <header className="w-full flex justify-between items-center">
                <h1 className="text-xl font-extrabold text-slate-950 leading-none">Procura-se: Profissional de Limpeza Residencial com Experiência</h1>
                <div className="flex gap-3 text-slate-800">
                    <div>
                        <CalendarBlank size={20} weight="fill"/>
                    </div>
                    <div>
                        <GlobeSimple size={20}/>
                    </div>
                </div>
            </header>
            <main>
                <p className="text-base font-normal leading-normal text-slate-950">
                    Estamos à procura de um(a) profissional de limpeza residencial dedicado(a) e confiável para cuidar de nossa casa em [Cidade Fictícia]. O(a) candidato(a) ideal deve ter experiência comprovada em limpeza profunda e organização de ambientes, além de um forte senso de responsabilidade e atenção aos detalhes. As tarefas incluem a limpeza de todos os cômodos, lavagem e passar roupas, e manutenção geral do lar. Oferecemos um ambiente de trabalho amigável e seguro, com horários flexíveis. Se você é uma pessoa detalhista e comprometida, esta é a oportunidade perfeita para você!
                </p>
            </main>
            <footer className="w-full flex flex-col gap-3">
                <Link to="/profile/username" className="flex gap-2">
                    <div className="w-8 h-w-8 overflow-hidden rounded-full">
                        <img 
                            src="http://github.com/PedroH2o.png"
                            alt="Pedro Yan"
                            className="w-full object-cover" 
                        />
                    </div>
                    <span className="font-bold text-base leading-snug text-slate-">
                        Pedro Yan
                    </span>
                </Link>
                <div className="space-y-4">
                    <span className="flex gap-2 text-sm text-slate-800 font-normal"><Mailbox size={18} /> F****@hotmail.com</span>
                    <span className="flex gap-2 text-sm text-slate-800 font-normal"><Phone size={18} /> 462-***-**** x4542</span>
                    <span className="flex gap-2 text-sm text-slate-800 font-normal"><MapPin size={18} /> Rippin Parkway, Coral Springs 64554-****</span>
                </div>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <div className="w-full flex justify-center">
                            <Button size="default">
                                Contratar
                            </Button>
                        </div>
                    </Dialog.Trigger>

                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur"/>
                        <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px] px-3 py-3 space-y-4 bg-slate-200 rounded-md">
                            <div className="space-y-2">
                                <Dialog.Title className="text-xl font-extrabold text-slate-950 leading-none">
                                    Proposta
                                </Dialog.Title>
                                <Dialog.Description className="text-sm font-normal leading-normal text-slate-950">
                                    Escreva uma proposta para o Fred
                                </Dialog.Description>
                            </div>

                            <div className="h-0.5 w-full bg-black/10"/>

                            <fieldset>
                                <label 
                                    htmlFor=""
                                    className="text-sm font-normal leading-snug text-slate-700"
                                >
                                    Escreva uma mensagem?
                                </label>
                                <textarea 
                                    name="" 
                                    id=""
                                    className="w-full min-h-[130px] px-3 py-3.5 rounded-md bg-slate-200 border border-slate-600/20 outline-none resize-none"
                                    
                                />
                            </fieldset>
                            <Dialog.Close asChild>
                                <Button size="full">
                                    Enviar
                                </Button>
                            </Dialog.Close>
                            <Dialog.Close 
                                className="absolute top-0 right-3 "
                                aria-label="Close"
                            >
                                <X size={20} />
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
               
            </footer>
            
        </article> 
    )
}