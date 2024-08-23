import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { useEffect } from "react";

export function Layout() {

    const navigate = useNavigate()
 
    useEffect(() => {
        const currentUrl = window.location.href;
        if(currentUrl === "http://localhost:5173/" || currentUrl === "https://quebra-galho-eight.vercel.app"){
            navigate('/posts')
        }
    })

    return (
        <div className="w-full">
           <Header/>
           <main className="w-full max-w-[1100px] mx-auto flex pt-24 gap-5">
            <Outlet/>
                
           </main>
        </div>
    )
}