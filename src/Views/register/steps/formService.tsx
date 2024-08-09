import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import pana from "../../../assets/images/pana.png";
import { Button } from "../../../components/button";
import { Input } from "../../../components/inputs";

interface FormServiceProps {
    setStep: (step: Steps) => void 
}

export function FormService({ setStep }: FormServiceProps) {
    return (
        <>
             <div className="w-full max-w-[650px] space-y-6">
                <h1 className='w-full text-5xl text-center font-extrabold leading-none text-slate-950'>
                    Ofereça Seus Serviços
                </h1>
                <span className=" w-full block text-xl text-center font-extrabold leading-snug text-slate-800">
                    Conecte-se com clientes que precisam de suas habilidades.
                </span>
                <form action="" className="w-full space-y-4">
                    <Input label="Qual sua area de atuação:" name="occupation" placeholder="Digite com o que você trabalha"/>
                    <Input label="Até qual distancia deseja atuar:" name="distance" placeholder="Distancia que deseja atuar"/>
                    <Input label="Faça uma breve descrição sobre você:" name="about" placeholder="Descreva aqui seu trabalho e experiências"/>
                    
                    <div className="w-full">
                    <Button size="full"> 
                        Proseguir cadastro 
                        <ArrowRight size={20}/> 
                    </Button>
                    </div>
                </form>
                
            </div>
            <div className="absolute w-full h-[90vh] -z-10 overflow-hidden">
                <img 
                    src={pana} 
                    alt="" 
                    className="absolute -left-1/3 -z-10 "
                />
            </div>
            
            <div className='absolute w-2/5 left-0 top-0 bottom-0 bg-gradient-to-r from-secondary-400/60 -z-20'/>
        </>
    )
}