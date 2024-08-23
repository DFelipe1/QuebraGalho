import imagotipo from "../../assets/logos/imagotipo.png";
import { InfoRegisterUser } from "./steps/InfoRegisterUser";
import { TypeUser } from "./steps/typeUser";
import { useState } from "react";
import { SearchService } from "./steps/searchService";
import { FormService } from "./steps/formService";



export function Register() {

    const [step, setStep] = useState<Steps>('infoRegisterUser')

    return (
      <>
        <header className="w-full py-4 flex justify-start items-center">
          <img src={imagotipo} alt="logo quebra-galho" className="max-w-[200px]"/>
        </header>

        <main className="w-full h-[89vh] flex justify-center items-center">
            {step === "infoRegisterUser" &&  <InfoRegisterUser setStep={setStep}/>}
            {step === "typeUser" &&  <TypeUser setStep={setStep}/>}
            {step === "SearchService" &&  <SearchService setStep={setStep}/>}
            {step === "FormService" &&  <FormService setStep={setStep}/>}
        </main>
      </>
    )
  }
  