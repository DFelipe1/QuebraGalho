import { Check, FunnelSimple, X } from "@phosphor-icons/react";
import { PostFeed } from "../../components/post";
import { Button } from "../../components/button";
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from "@radix-ui/react-checkbox";
import { Input } from "../../components/inputs";

export function Home() {

    return (
        <div className="w-full px-2 py-4 space-y-5">
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <button className="px-1.5 py-1 bg-slate-200 border border-slate-950 rounded-lg hover:brightness-105 text-slate-950"> 
                        <FunnelSimple size={20} weight="bold" />
                    </button>
                    <span className="px-1.5 py-1 bg-slate-200 border border-slate-950 rounded-lg text-slate-950 text-sm font-semibold hover:brightness-105">
                        Recentes
                    </span>
                </div>
                <Dialog.Root>
                     <Dialog.Trigger>
                        <Button>
                            Criar serviço
                        </Button>
                     </Dialog.Trigger>
 
                     <Dialog.Portal>
                         <Dialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur"/>
                         <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px] px-3 py-3 space-y-4 bg-slate-200 rounded-md">
                             <div className="space-y-2">
                                 <Dialog.Title className="text-xl font-extrabold text-slate-950 leading-none">
                                     Criando postagem de serviço
                                 </Dialog.Title>
                             </div>
 
                             <div className="h-0.5 w-full bg-black/10"/>
                    
                             <form className="space-y-5" action="">
                                <Input label="Titulo" name="title"/>
                                <div>
                                    <label 
                                        htmlFor="about"
                                        className="text-sm font-normal leading-snug text-slate-700"
                                    >
                                        Descrição
                                    </label>
                                    <textarea 
                                        name="description" 
                                        id="description"
                                        className="w-full min-h-[130px] px-3 py-3.5 rounded-md bg-slate-200 border border-slate-600/20 outline-none resize-none"
                                    />
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label 
                                        htmlFor="about"
                                        className="text-sm font-normal leading-snug text-slate-700"
                                    >
                                        É urgente esse serviço?
                                    </label>
                                    <Checkbox.Root className="size-6 flex items-center justify-center appearance-none border border-slate-600 rounded" name="remote" id="remote">
                                        <Checkbox.Indicator className="text-secondary-500">
                                            <Check size={16} weight="bold"/>
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <label 
                                        htmlFor="about"
                                        className="text-sm font-normal leading-snug text-slate-700"
                                    >
                                        Esse serviço pode ser feito de forma remota?
                                    </label>
                                    <Checkbox.Root className="size-6 flex items-center justify-center appearance-none border border-slate-600 rounded" name="remote" id="remote">
                                        <Checkbox.Indicator className="text-secondary-500">
                                            <Check size={16} weight="bold"/>
                                        </Checkbox.Indicator>
                                    </Checkbox.Root>
                                </div>
                                 
                                    <Button size="full" type="submit">
                                        Enviar
                                    </Button>
            
                                <Dialog.Close 
                                    className="absolute top-0 right-3 "
                                    aria-label="Close"
                                    >
                                    <X size={20} />
                                </Dialog.Close>
                        </form>
                         </Dialog.Content>
                     </Dialog.Portal>
                 </Dialog.Root>
                
            </div> 
            <div className="flex flex-col gap-4">
                <PostFeed/>
                <PostFeed/>
                <PostFeed/>
            </div>
        </div> 
    )
}
  