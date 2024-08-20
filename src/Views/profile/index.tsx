import { Button } from "../../components/button";

export function Profile() {
    return (
        <div className="w-full max-w-4xl px-2 py-4 space-y-5">
            <div className="w-full flex justify-between items-center bg-slate-50 rounded-lg px-4 py-5 shadow">
                <div className="flex gap-3 justify-between items-center">
                    <img 
                        src="http://github.com/DFelipe1.png" 
                        alt="" 
                        className="w-14 h-14 rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                        <span className="text-lg text-slate-900 font-semibold leading-snug">David Felipe</span>
                        <span className="text-base text-slate-900 font-normal leading-snug">Desenvolvedor web</span>
                    </div>
                </div>         
                <Button>
                    Contratar profissional 
                </Button>

            </div>
            <div className="w-full space-y-4 bg-slate-50 rounded-lg px-4 py-5 shadow">
                <h3 className="text-2xl text-slate-950 font-extrabold leading-snug">Sobre mim</h3>
                <p className="text-base text-slate-900 font-normal leading-snug">
                Lorem ipsum dolor sit amet consectetur. Ultrices vulputate dui elementum quam massa. Nunc justo placerat adipiscing at. Metus a mattis est nibh habitant ultrices ut. At eget ornare placerat aliquam natoque suspendisse.
                </p>
            </div>
            <div className="w-full space-y-4 bg-slate-50 rounded-lg px-4 py-5 shadow">
                <h3 className="text-2xl text-slate-950 font-extrabold leading-snug">Serviços</h3>
                <p className="text-base text-slate-900 font-normal leading-snug">
                    Lorem ipsum dolor sit amet consectetur. Ultrices vulputate dui elementum quam massa. Nunc justo placerat adipiscing at. Metus a mattis est nibh habitant ultrices ut. At eget ornare placerat aliquam natoque suspendisse.
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