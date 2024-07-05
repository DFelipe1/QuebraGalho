import { Link } from "react-router-dom";
import imagotipo from "../assets/logos/imagotipo.png";

export function Login() {

    return (
      <header className="w-full py-4 flex justify-between items-center">
        <img src={imagotipo} alt="logo quebra-galho" className="max-w-[200px]"/>
        <Link to="/register">
          <span className="mr-2 text-base font-normal text-slate-800">você ainda não tem uma conta?</span>
          <button className="w-fit px-4 py-3 bg-secondary-400 text-slate-900 text-base font-bold rounded-lg">
            Criar conta
          </button>
        </Link>
      </header>
    )
  }
  