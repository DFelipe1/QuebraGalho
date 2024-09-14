import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import bro from "../../../assets/images/bro.png";
import { Button } from "../../../components/button";
import { useNavigate } from "react-router-dom";

interface SearchServiceProps {
    setStep: (step: Steps) => void 
  }
  

export function SearchService({setStep}: SearchServiceProps) {

    const navigate = useNavigate()

    function handleCreateUser() {
        navigate('/')
    }

    return (
        <>
             <div className="w-full max-w-[650px] space-y-6">
                <h1 className='w-full max-sm:text-4xl text-5xl text-center font-extrabold leading-none text-slate-950'>
                    Encontre o Profissional Ideal
                </h1>
                <span className="w-full block max-sm:text-lg text-xl text-center font-extrabold leading-snug text-slate-800">
                    Conecte-se com os melhores prestadores de serviço na sua região.
                </span>
                <Button size="full" onClick={handleCreateUser}>
                    <span>Entrar na plataforma</span>
                </Button>
                <Button size="full" variant="secondary" onClick={() => setStep('typeUser')}>
                    <span>Voltar</span>
                    <ArrowRight size={20}/>
                </Button>
            </div>
            <div className="absolute max-sm:sr-only min-md:sr-only  not-sr-only w-full h-[90vh] -z-10 overflow-hidden">
                <img 
                    src={bro} 
                    alt="" 
                    className="absolute -right-1/3 -z-10 "
                />
            </div>
            
            <div className='absolute w-2/5 right-0 top-0 bottom-0 bg-gradient-to-l from-slate-400/60 -z-20'/>
        </>
    )
}