import { DotsThree } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Messages } from "../../components/messages";
import { AnaliticService } from "./step/analiticService";
import { NeedBudget } from "./step/needBudget";
import { ChatStep } from "./step/chatStep";
import { FinishBudget } from "./step/finishBudget";
import { AcceptedBudget } from "./step/acceptedBudget";
import { useNavigate } from "react-router-dom";

export function Chat() {

    const navigate = useNavigate()

    const [steps, setSteps] = useState<Chat>('isAnalitic')
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
    const [message, setMessage] = useState('')

    function handleNewMassage(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        if(message.trim() === ''){
            return
        }
        setMessages([...messages, {id: '4', author: 'me', message: message}])

        setMessage('')
        setSteps('isFinal')
    }

    function handleMessageChanged(e: ChangeEvent<HTMLInputElement>){
        setMessage(e.target.value)

    if(e.target.value == ''){
      return
    }
    }

    function acceptedBudget() {
        navigate('/contract/')
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
                            <Messages key={message.id} message={message.message} variant={message.author === 'me' ? "me" : "to"}/>

                        ))
                    }
                </div>
            </div>
           
            {steps === "isAnalitic" &&  <AnaliticService setSteps={setSteps}/>}
            {steps === "isBudget" &&  <NeedBudget setSteps={setSteps}/>}
            {steps === "message" &&  <ChatStep handleNewMassage={handleNewMassage} handleMessageChanged={handleMessageChanged}/>}
            {steps === "isFinal" &&  <FinishBudget setSteps={setSteps}/>}
            {steps === "acceptedBudget" &&  <AcceptedBudget acceptedBudget={acceptedBudget} setSteps={setSteps}/>}

        </div> 
    )
} 