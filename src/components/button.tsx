import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants";

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

const buttonVariants = tv({
    base: 'w-fit px-4 bg-secondary-400 text-slate-900 text-base font-bold rounded-lg flex gap-3 items-center justify-center  hover:brightness-110',

    variants: {
        variant: {
            primary: 'bg-secondary-400 text-slate-900',
            secondary: 'bg-primary text-slate-100',
            ghost: 'bg-transparent text-slate-900'
        },

        size: {
            default: 'py-3',
            full: 'w-full h-11'
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'default'
    }

})

export function Button({ children, variant, size, ...rest }: ButtonProps) {
    return (
        <button 
            className={buttonVariants({ variant, size })}
            {...rest}
        >
            {children}
        </button>
    )
}