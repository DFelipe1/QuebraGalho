import { CalendarBlank, GlobeSimple } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function PostFeed() {

    const navigate = useNavigate()

    function handlePostPage() {
        navigate('/post/1')
    }

    return (
        <button onClick={handlePostPage} className="w-full px-3 py-4 bg-slate-50 space-y-4 rounded-lg shadow">
            <div className="space-y-6 w-full">
                <h1 className="text-xl text-left text-slate-950 font-extrabold leading-none">
                    Procura-se: Profissional de Limpeza Residencial com Experiência
                </h1>
                <p className="text-base text-left font-normal text-slate-950 leading-snug line-clamp-2">
                    Estamos à procura de um(a) profissional de limpeza residencial dedicado(a) e confiável para cuidar de nossa casa em [Cidade Fictícia]. O(a) candidato(a) ideal deve ter experiência comprovada em limpeza profunda e organização de ambientes, além de um forte senso de responsabilidade e atenção aos detalhes. As tarefas incluem a limpeza de todos os cômodos, lavagem e passar roupas, e manutenção geral do lar. Oferecemos um ambiente de trabalho amigável e seguro, com horários flexíveis. Se você é uma pessoa detalhista e comprometida, esta é a oportunidade perfeita para você!
                </p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center justify-center">
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
                </div>
                <div className="flex gap-3">
                    <div>
                        <CalendarBlank size={20} weight="fill"/>
                    </div>
                    <div>
                        <GlobeSimple size={20}/>
                    </div>
                </div>
            </div>
        </button>
    )
}