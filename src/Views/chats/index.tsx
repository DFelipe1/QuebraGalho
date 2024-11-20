import { DotsThree, PaperPlaneTilt } from "@phosphor-icons/react";
import { Button } from "../../components/button";
import { FormEvent, useState } from "react";
import { Messages } from "../../components/messages";

export function Chat() {

    const [isAnalitic, setIsAnalitic] = useState(false)
    const [isBudget, setIsBudget] = useState(false)
    const [isFinal, setIsFinal] = useState(false)
    const [acceptedBudget, setAcceptedBudget] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: '1',
            author: 'to',
            message: 'lorem ipsum'
        },
        {
            id: '2',
            author: 'to',
            message: 'lorem ipsum'
        },
        {
            id: '3',
            author: 'me',
            message: 'lorem ipsum'
        },
    ])

    function handleNewMassage(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        
        if(!e.target.message.value){
            return
        }

        setMessages([...messages, {id: '4', author: 'me', message: e.target.message.value}])

        setIsFinal(true)
    }

    return (
        <div className="w-full h-[88vh] flex flex-col bg-slate-50 px-2 py-4 space-y-2">
            <div className="w-full top-0 p-2 flex justify-between items-center shadow-sm">
                <div className="flex gap-3 items-center">
                    <img 
                        src="http://github.com/MaykBrito.png" 
                        alt="" 
                        className="w-14 h-14 rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                        <span className="text-lg text-slate-900 font-semibold leading-snug">Mayk</span>
                        {/* <span className="text-base text-slate-900 font-normal leading-snug">Desenvolvedor web</span> */}
                    </div>
                </div> 

                <button>
                    <DotsThree size={20} weight="bold"/>
                </button>        
            </div>

            <div className="flex-1 overflow-auto flex flex-col-reverse snap-y snap-mandatory">
              
                <div className="space-y-4 snap-end">
                    {
                        messages.map(message => (
                            <Messages key={message.id} message={message.message} variant={message.author}/>

                        ))
                    }
                </div>

                
               
            </div>

           {!isAnalitic && (
             <div className="w-full h-fit space-y-1">
                <strong className="text-2xl text-slate-950 font-extrabold leading-snug">
                    Aceita analisar esse serviço?
                </strong>
                <form className="flex w-full gap-4">
                    <Button onClick={() => setIsAnalitic(true)} size="full">Aceitar</Button>
                    <Button variant="secondary" size="full">Recusar</Button>
                </form>
            </div>
           )}
           
           {isAnalitic && !isBudget && (
             <div className="w-full h-fit space-y-1">
                <strong className="text-2xl text-slate-950 font-extrabold leading-snug">
                    Precisa fazer orçamento previo?
                </strong>
                <form className="flex w-full gap-4">
                    <Button onClick={() => setIsBudget(true)} size="full">Sim</Button>
                    <Button variant="secondary" size="full">Não</Button>
                </form>
            </div>
           )}
           
           {isAnalitic && isBudget && (
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
                    />
                    <Button type="submit">
                        <PaperPlaneTilt size={20} weight="fill"/>
                    </Button>
                </form>
            </div>

           )}

           {isFinal && (
             <div className="w-full h-fit space-y-1">
                <strong className="text-2xl text-slate-950 font-extrabold leading-snug">
                    Deseja finalizar orçamento?
                </strong>
                <form className="flex w-full gap-4">
                    <Button onClick={() => setAcceptedBudget(true)} size="full">Sim</Button>
                    <Button onClick={() => setIsFinal(false)} variant="secondary" size="full">Não</Button>
                </form>
            </div>
           )}
          
           {acceptedBudget && (
             <div className="w-full h-fit space-y-1">
                <strong className="text-2xl text-slate-950 font-extrabold leading-snug">
                    Aceita o orçamento?
                </strong>
                <form className="flex w-full gap-4">
                    <Button onClick={() => console.log("notificação")} size="full">Sim</Button>
                    <Button onClick={() => setAcceptedBudget(false)} variant="secondary" size="full">Não</Button>
                </form>
            </div>
           )}


        </div> 
    )
} 