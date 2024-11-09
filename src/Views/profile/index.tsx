import { useParams } from "react-router-dom";
import { Button } from "../../components/button";
import * as Dialog from '@radix-ui/react-dialog';
import { X } from "@phosphor-icons/react";
import { Input } from "../../components/inputs";
import { FormEvent, useState } from "react";

export function Profile() {

    const user = {
        name: "David Felipe",
        occupation: "Desenvolvedor Web",
        about: "Lorem ipsum dolor sit amet consectetur. Ultrices vulputate dui elementum quam massa. Nunc justo placerat adipiscing at. Metus a mattis est nibh habitant ultrices ut. At eget ornare placerat aliquam natoque suspendisse.",
        descriptionService: " Lorem ipsum dolor sit amet consectetur. Ultrices vulputate dui elementum quam massa. Nunc justo placerat adipiscing at. Metus a mattis est nibh habitant ultrices ut. At eget ornare placerat aliquam natoque suspendisse."
     }
    const [formState, setFormState] = useState({
        firstname: user.name.split(" ")[0],
        lastname: user.name.split(" ")[1],
        occupation: user.occupation,
        about: user.about,
        descriptionService: user.descriptionService
    })

    const { userName } = useParams()
    const userNameLogged = "david-felipe"

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    function handlerUpdateProfile(e: FormEvent){
        e.preventDefault()

        //Ataualize o BD nessa função
        user.name = formState.firstname + ' ' + formState.lastname
        user.occupation = formState.occupation
        user.about = formState.about
        user.descriptionService = formState.descriptionService

        console.log(user)
    }
    return (
        <div className="w-full max-w-4xl px-2 py-4 space-y-5">
            <div className="w-full flex justify-between items-center bg-slate-50 rounded-lg px-4 py-5 shadow">
                <div className="flex gap-3 items-center">
                    <img 
                        src="http://github.com/DFelipe1.png" 
                        alt="" 
                        className="w-14 h-14 rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                        <span className="text-lg text-slate-900 font-semibold leading-snug">{user.name}</span>
                        <span className="text-base text-slate-900 font-normal leading-snug">{user.occupation}</span>
                    </div>
                </div>    

                { userName === userNameLogged ? (
                     <Dialog.Root>
                     <Dialog.Trigger>
                         <div className="w-full flex justify-center">
                             <Button variant="secondary" size="default">
                                 Editar perfil
                             </Button>
                         </div>
                     </Dialog.Trigger>
 
                     <Dialog.Portal>
                         <Dialog.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur"/>
                         <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px] px-3 py-3 space-y-4 bg-slate-200 rounded-md">
                             <div className="space-y-2">
                                 <Dialog.Title className="text-xl font-extrabold text-slate-950 leading-none">
                                     Editar perfil
                                 </Dialog.Title>
                             </div>
 
                             <div className="h-0.5 w-full bg-black/10"/>
                    
                             <form action="" onSubmit={handlerUpdateProfile}>
                                <Input label="nome" name="firstname" value={formState.firstname} onChange={handleChange}/>
                                <Input label="sobrenome" name="lastname" value={formState.lastname} onChange={handleChange}/>
                                <Input label="Profissão" name="occupation" value={formState.occupation} onChange={handleChange}/>
                                <div>
                                    <label 
                                        htmlFor="about"
                                        className="text-sm font-normal leading-snug text-slate-700"
                                    >
                                        sobre você:
                                    </label>
                                    <textarea 
                                        name="about" 
                                        id="about"
                                        className="w-full min-h-[130px] px-3 py-3.5 rounded-md bg-slate-200 border border-slate-600/20 outline-none resize-none"
                                        value={formState.about} 
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label 
                                        htmlFor="service"
                                        className="text-sm font-normal leading-snug text-slate-700"
                                    >
                                        descrição do seu serviço:
                                    </label>
                                    <textarea 
                                        name="descriptionService" 
                                        id="service"
                                        className="w-full min-h-[130px] px-3 py-3.5 rounded-md bg-slate-200 border border-slate-600/20 outline-none resize-none"
                                        value={formState.descriptionService} 
                                        onChange={handleChange}
                                    />
                                </div>
                                 
                                    <Button size="full" type="submit">
                                        Enviar
                                    </Button>
            
                                <Dialog.Close 
                                    className="absolute top-0 right-3 "
                                    aria-label="Close"
                                    >
                                    <X size={20} />
                                </Dialog.Close>
                        </form>
                         </Dialog.Content>
                     </Dialog.Portal>
                 </Dialog.Root>
                ) : (

                    <Button>
                        Contratar profissional 
                    </Button>
                )}     

            </div>
            <div className="w-full space-y-4 bg-slate-50 rounded-lg px-4 py-5 shadow">
                <h3 className="text-2xl text-slate-950 font-extrabold leading-snug">Sobre mim</h3>
                <p className="text-base text-slate-900 font-normal leading-snug">
                    {user.about}
                </p>
            </div>
            <div className="w-full space-y-4 bg-slate-50 rounded-lg px-4 py-5 shadow">
                <h3 className="text-2xl text-slate-950 font-extrabold leading-snug">Serviços</h3>
                <p className="text-base text-slate-900 font-normal leading-snug">
                    {user.descriptionService}
                </p>
            </div>
            <div className="w-full space-y-4 bg-slate-50 rounded-lg px-4 py-5 shadow">
                <h3 className="text-2xl text-slate-950 font-extrabold leading-snug">Depoimentos</h3>
                <div className="w-full flex gap-4 items-center overflow-hidden">
                    <div className="w-full  px-2 py-1 rounded-lg border border-slate-200 shadow space-y-4">
                        <div className="flex gap-3 items-center">
                            <img 
                                src="http://github.com/DFelipe1.png" 
                                alt="" 
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                                <span className="text-base text-slate-900 font-semibold leading-snug">David Felipe</span>
                            </div>
                        </div>  
                        <p className="text-base text-slate-900 font-normal leading-snug line-clamp-6">
                            Lorem ipsum dolor sit amet consectetur. Faucibus feugiat cursus in elit tellus orci. Purus diam nulla semper etiam varius sed sagittis neque. Proin faucibus cursus ultrices egestas quisque consequat aliquet. Ut venenatis nulla dictum dui ultricies vel vulputate id faucibus. Viverra mattis libero consectetur maecenas ultrices. Nisl a 
                        </p>       
                    </div>

                    <div className="w-full  px-2 py-1 rounded-lg border border-slate-200 shadow space-y-4">
                        <div className="flex gap-3 items-center">
                            <img 
                                src="http://github.com/DFelipe1.png" 
                                alt="" 
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="flex flex-col gap-1">
                                <span className="text-base text-slate-900 font-semibold leading-snug">David Felipe</span>
                            </div>
                        </div>  
                        <p className="text-base text-slate-900 font-normal leading-snug line-clamp-6">
                            Lorem ipsum dolor sit amet consectetur. Faucibus feugiat cursus in elit tellus orci. Purus diam nulla semper etiam varius sed sagittis neque. Proin faucibus cursus ultrices egestas quisque consequat aliquet. Ut venenatis nulla dictum dui ultricies vel vulputate id faucibus. Viverra mattis libero consectetur maecenas ultrices. Nisl a 
                        </p>       
                    </div>
                </div>
            </div>
        </div>
    )
}