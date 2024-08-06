import { ComponentProps } from "react"

interface InputProps extends ComponentProps<'input'>{
    name: string
    label: string
}

export function Input({ name, label, ...rest}: InputProps) {
    return (
        <div className="w-full space-y-2 ">
            <label 
                htmlFor={name}
                className="text-sm font-normal leading-snug text-slate-700"
            >
                {label}
            </label>
            <input 
                name={name}
                className="w-full px-3 py-3.5 rounded-md bg-slate-200 border border-slate-600/20 outline-none "
                {...rest}
            />
        </div>
    )
}