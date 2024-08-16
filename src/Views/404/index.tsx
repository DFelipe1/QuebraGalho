import { Link } from "react-router-dom";
import Image404 from '../../assets/images/404.png';

export function NotFoundPage(){
    return (
        <main className="w-screnn h-screen overflow-hidden flex flex-col justify-center items-center">
            <div className="w-fit p-3 flex flex-col justify-center items-center gap-3">
                <img 
                    src={Image404} 
                    alt="" 
                    className="w-96"
                />
                <h1 className="text-3xl text-slate-950 font-extrabold leading-snug">Opa!! Acho que essa pagina não existe</h1>
                <span className=" text-base text-slate-900 leading-normal space-y-5"> 
                    Volte para o inicio e reveja sua rota 
                    <Link 
                        to='/'
                        className="text-secondary-500 hover:text-secondary-300 font-bold"
                    > Voltar </Link>    
                </span>
            </div>
        </main>
    )
}