import { Link } from "react-router-dom";
import imagotipo from "../../assets/logos/imagotipo.png";
import amico from "../../assets/images/amico.png";
import { Button } from "../../components/button";
import { Input } from "../../components/inputs";

export function Login() {

    return (
      <>
        <header className="w-full py-4 flex justify-between items-center">
          <img src={imagotipo} alt="logo quebra-galho" className="max-w-[200px]"/>
          <Link to="/register">
            <span className="mr-2 text-base font-normal text-slate-800">você ainda não tem uma conta?</span>
            <Button> Criar conta </Button>
          </Link>
        </header>

        <main className="w-full h-[89vh] flex justify-center items-center">
          <div className="w-full flex justify-between items-center">
            <div className="flex-1 w-full">
              <img src={amico} alt="" className="w-full object-cover"/>
            </div>

            <div className="w-full max-w-[600px] space-y-5">
              <h1 className="text-5xl font-extrabold leading-none text-slate-950">Bem-vindo </h1>
              <span className="text-xl font-extrabold leading-snug text-slate-950">Conectando Você ao Melhor Serviço, Quando Você Precisar</span>
              <form action="" className="w-full space-y-4">
                <p className="text-base font-normal leading-snug text-slate-900">Faça login para encontrar profissionais qualificados ou oferecer seus serviços e conectar-se com novos clientes.</p>
                  <Input label="Número de celular ou Email:" name="numberPhoneOrEmail" placeholder="Digite seu número ou email de cadastro"/>
                  <Input label="Senha:" name="password" placeholder="Digite sua senha"/>
                <Link 
                  to='/'
                  className="text-sm font-semibold leading-snug text-secondary-500"
                >
                  Esqueceu sua senha?
                </Link>
                <div className="w-full">
                  <Button size="full"> Entrar </Button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </>
    )
  }
  