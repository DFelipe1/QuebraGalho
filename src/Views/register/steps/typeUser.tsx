// import pana from "../../../assets/images/pana.png";
// import bro from "../../../assets/images/bro.png";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Button } from "../../../components/button";

interface TypeUserProps {
    setStep: (step: Steps) => void 
  }

export function TypeUser({setStep}: TypeUserProps) {
    return (
        <div className="max-sm:h-[70vh] max-sm:flex max-sm:items-center">
             <div className="w-full max-w-[600px] space-y-5">
                <h1 className='w-full max-sm:text-4xl text-5xl text-center font-extrabold leading-none text-slate-950'>Como entrar na plataforma?</h1>
                <span className=" w-full block text-xl text-center font-extrabold leading-snug text-slate-800">Escolha um tipo de categoria</span>
                <div className="flex max-sm:flex-col flex-row gap-3 justify-between items-center">
                    <Button size="full" onClick={() => setStep('SearchService')}>
                        <ArrowLeft size={20}/>
                        <span>Encontrar profissional</span>
                    </Button>
                    <Button size="full" variant="secondary" onClick={() => setStep('FormService')}>
                        <span>Prestar serviço</span>
                        <ArrowRight size={20}/>
                    </Button>
                </div>
            </div>
            {/* <div className="absolute inset-0 max-sm:sr-only  not-sr-only w-full h-[90vh] -z-10 overflow-hidden">
                <img 
                    src={bro} 
                    alt="" 
                    className="absolute bottom-0 -left-1/3 -z-10 "
                />
                <img 
                    src={pana} 
                    alt="" 
                    className="absolute bottom-0 -right-1/4 -z-10 "
                />
            </div> */}
            
            <div className='absolute w-2/5 left-0 top-0 bottom-0 bg-gradient-to-r from-slate-400/60 -z-20'/>
            <div className='absolute w-2/5 right-0 top-0 bottom-0 bg-gradient-to-l from-secondary-400/60 -z-20'/>
        </div>
    )
}