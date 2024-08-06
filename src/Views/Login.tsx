import { Link } from "react-router-dom";
import imagotipo from "../assets/logos/imagotipo.png";
import amico from "../assets/images/amico.png";

export function Login() {

    return (
      <>
        <header className="w-full py-4 flex justify-between items-center">
          <img src={imagotipo} alt="logo quebra-galho" className="max-w-[200px]"/>
          <Link to="/register">
            <span className="mr-2 text-base font-normal text-slate-800">você ainda não tem uma conta?</span>
            <button className="w-fit px-4 py-3 bg-secondary-400 text-slate-900 text-base font-bold rounded-lg">
              Criar conta
            </button>
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
                <div className="w-full space-y-2 m-0">
                  <label 
                    htmlFor="numberPhoneOrEmail"
                    className="text-sm font-normal leading-snug text-slate-700"
                  >
                    Número de celular ou Email:
                  </label>
                  <input 
                    type="text" 
                    name="numberPhoneOrEmail" 
                    placeholder="Digite seu numero ou email cadastrado na plataforma"
                    className="w-full px-3 py-3.5 rounded-md bg-slate-200 border border-slate-600/20 outline-none "
                  />
                </div>
                <div  className="w-full space-y-2 m-0">
                  <label htmlFor="password" className="text-sm font-normal leading-snug text-slate-700">Senha:</label>
                  <input type="text" name='password' placeholder="Digite sua senha" className="w-full px-3 py-3.5 rounded-md bg-slate-200 border border-slate-600/20 outline-none "/>
                </div>
                <Link 
                  to='/'
                  className="text-sm font-semibold leading-snug text-secondary-500"
                >
                  Esqueceu sua senha?
                </Link>
                <div className="w-full">
                  <button className="w-full px-4 py-3 bg-secondary-400 text-slate-900 text-base font-bold rounded-lg">
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </>
    )
  }
  