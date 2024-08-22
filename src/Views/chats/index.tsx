import { DotsThree, PaperPlaneTilt } from "@phosphor-icons/react";
import { Button } from "../../components/button";

export function Chat() {
    return (
        <div className="w-full h-[88vh] flex flex-col bg-slate-50 px-2 py-4 space-y-2">
            <div className="w-full top-0 p-2 flex justify-between items-center shadow-sm">
                <div className="flex gap-3 items-center">
                    <img 
                        src="http://github.com/MaykBrito.png" 
                        alt="" 
                        className="w-14 h-14 rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                        <span className="text-lg text-slate-900 font-semibold leading-snug">Mayk</span>
                        {/* <span className="text-base text-slate-900 font-normal leading-snug">Desenvolvedor web</span> */}
                    </div>
                </div> 

                <button>
                    <DotsThree size={20} weight="bold"/>
                </button>        
            </div>

            <div className="flex-1 overflow-auto flex flex-col-reverse snap-y snap-mandatory">
              
                  <div className="space-y-4 snap-end">

                    <div className="w-full flex justify-start">
                            <p className="w-4/6 px-2 py-4 text-base text-slate-900 font-normal bg-slate-300 rounded">
                                Lorem ipsum dolor sit amet consectetur. Aenean tortor velit sit augue mauris gravida nulla. Purus phasellus dignissim nunc aliquam et. Lacus pretium adipiscing felis tincidunt ultricies semper. Vulputate curabitur bibendum nunc rhoncus non pellentesque sed. Lacus lorem morbi aliquet volutpat ut est. Purus eu vehicula nisl tellus commodo. Magna lectus id faucibus suspendisse ipsum habitant. Libero condimentum orci fusce amet elit. Euismod in congue commodo posuere venenatis neque vitae aliquam aliquet. Eget sapien orci condimentum enim iaculis ultrices sit.
                            </p>
                        </div>
                        <div className="w-full flex justify-start">
                            <p className="w-4/6 px-2 py-4 text-base text-slate-900 font-normal bg-slate-300 rounded">
                                Lorem ipsum dolor sit amet consectetur. Aenean tortor velit sit augue mauris gravida nulla. Purus phasellus dignissim nunc aliquam et. Lacus pretium adipiscing felis tincidunt ultricies semper. Vulputate curabitur bibendum nunc rhoncus non pellentesque sed. Lacus lorem morbi aliquet volutpat ut est. Purus eu vehicula nisl tellus commodo. Magna lectus id faucibus suspendisse ipsum habitant. Libero condimentum orci fusce amet elit. Euismod in congue commodo posuere venenatis neque vitae aliquam aliquet. Eget sapien orci condimentum enim iaculis ultrices sit.
                            </p>
                        </div>
                        
                        <div className="w-full flex justify-end ">
                            <p className="w-4/6 px-2 py-4 text-base text-slate-900 font-normal bg-secondary-300 rounded">
                                Lorem ipsum dolor sit amet consectetur. Aenean tortor velit sit augue mauris gravida nulla. Purus phasellus dignissim nunc aliquam et. Lacus pretium adipiscing felis tincidunt ultricies semper. Vulputate curabitur bibendum nunc rhoncus non pellentesque sed. Lacus lorem morbi aliquet volutpat ut est. Purus eu vehicula nisl tellus commodo. Magna lectus id faucibus suspendisse ipsum habitant. Libero condimentum orci fusce amet elit. Euismod in congue commodo posuere venenatis neque vitae aliquam aliquet. Eget sapien orci condimentum enim iaculis ultrices sit.
                            </p>
                        </div>

                  </div>

                
               
            </div>

            {/* <div className="w-full h-fit space-y-1">
                <strong className="text-2xl text-slate-950 font-extrabold leading-snug">
                    Aceita analisar esse serviço?
                </strong>
                <div className="flex w-full gap-4">
                    <Button size="full">Aceitar</Button>
                    <Button variant="secondary" size="full">Recusar</Button>
                </div>
            </div> */}
            <div className="w-full h-fit space-y-1">
                <strong className="text-base text-slate-500 font-normal leading-relaxed">
                    Ofereça seu preço e data da visita
                </strong>
                <form 
                    action=""
                    className="w-full p-3 rounded-lg flex justify-between bg-slate-700 gap-4"
                >
                    <input 
                        type="text"
                        className="w-full bg-transparent outline-none"
                        placeholder="Digite sua mensagem aqui"
                    />
                    <Button>
                        <PaperPlaneTilt size={20} weight="fill"/>
                    </Button>
                </form>
            </div>

        </div> 
    )
} 