import { ArrowLeft, CalendarBlank, DotsThree, GlobeSimple, Mailbox, MapPin, Phone } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "../../components/button";

export function Post() {
    return (
        <article className="w-full px-2 py-4 space-y-5">
            <div>
                <Link to='/posts'>
                    <ArrowLeft/>
                </Link>
                <button>
                    <DotsThree/>
                </button>
            </div>
            <header>
                <h1>Procura-se: Profissional de Limpeza Residencial com Experiência</h1>
                <div className="flex gap-3">
                    <div>
                        <CalendarBlank size={20} weight="fill"/>
                    </div>
                    <div>
                        <GlobeSimple size={20}/>
                    </div>
                </div>
            </header>
            <main>
                <p>
                Estamos à procura de um(a) profissional de limpeza residencial dedicado(a) e confiável para cuidar de nossa casa em [Cidade Fictícia]. O(a) candidato(a) ideal deve ter experiência comprovada em limpeza profunda e organização de ambientes, além de um forte senso de responsabilidade e atenção aos detalhes. As tarefas incluem a limpeza de todos os cômodos, lavagem e passar roupas, e manutenção geral do lar. Oferecemos um ambiente de trabalho amigável e seguro, com horários flexíveis. Se você é uma pessoa detalhista e comprometida, esta é a oportunidade perfeita para você!
                </p>
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
            </main>
            <footer>
                <div>
                    <span><Mailbox size={18}/> F****@hotmail.com</span>
                    <span><Phone size={18}/> 462-***-**** x4542</span>
                    <span><MapPin size={18}/> Rippin Parkway, Coral Springs 64554-****</span>
                </div>
                <Button size="default">
                    Contratar
                </Button>
            </footer>
            
        </article> 
    )
}