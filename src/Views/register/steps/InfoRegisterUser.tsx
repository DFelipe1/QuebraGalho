import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { Button } from "../../../components/button";
import { Input } from "../../../components/inputs";
import { Link } from "react-router-dom";

import rafiki from "../../../assets/images/rafiki.png";


interface InfoRegisterUserProps {
  setStep: (step: Steps) => void 
}

export function InfoRegisterUser({setStep}: InfoRegisterUserProps) {
    return (
        <div className="w-full flex max-sm:flex-col justify-between items-center">
            <div className="flex-1 w-full space-y-3">
                <Link 
                    to='/login'
                    className="text-sm font-semibold leading-snug text-secondary-500 flex gap-3 items-center"
                >
                    <ArrowLeft size={20}/>
                    <span>Voltar ao login</span>
                </Link>
              <img src={rafiki} alt="" className="max-sm:sr-only not-sr-only w-full object-cover"/>
            </div>

            <div className="w-full md:w-1/2 max-w-[600px] space-y-5">
              <h1 className="text-5xl font-extrabold leading-none text-slate-950">Bem-vindo </h1>
              <span className="text-xl font-extrabold leading-snug text-slate-800">Conectando Você ao Melhor Serviço, Quando Você Precisar</span>
              <form action="" className="w-full space-y-4">
                {/* <p className="text-base font-normal leading-snug text-slate-900">Faça login para encontrar profissionais qualificados ou oferecer seus serviços e conectar-se com novos clientes.</p> */}
                <Input label="Nome:" name="name" placeholder="Digite seu nome e sobrenome"/>
                <Input label="Email:" name="email" placeholder="Digite seu melhor email"/>
                <div className="w-full flex max-sm:flex-col justify-between gap-2">
                    <Input label="Número de celular:" name="phoneNumber" placeholder="informe seu número de celular"/>
                    <Input label="CEP:" name="cep" placeholder="informe seu CEP (ex. 000000)"/>
                </div>
                <Input label="Crie uma senha:" name="password" placeholder="Digite a senha que deseja criar"/>
                <Input label="Confirme a senha:" name="email" placeholder="Digite a mesma senha novamente"/>
                
                <div className="w-full">
                  <Button size="full" onClick={() => setStep("typeUser")}> 
                    Proseguir cadastro 
                    <ArrowRight size={20}/> 
                </Button>
                </div>
              </form>
            </div>        
        </div>
    )
}