import { Clock } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { tv, VariantProps } from "tailwind-variants";

interface ServicesProps extends VariantProps<typeof serviceVariants>, VariantProps<typeof tagVariants> {
    contractURL: string
}

const serviceVariants = tv({
    base: 'w-full px-3 py-5 rounded-lg flex flex-col gap-4 items-start ',

    variants: {
        variant: {
            success: 'bg-success-light/60',
            process: 'bg-process-light/60',
            danger: 'bg-danger-light/60',
        },
    },

    defaultVariants: {
        variant: 'success',
    }

})
const tagVariants = tv({
    base: 'p-1 text-slate-900 rounded-lg border',

    variants: {
        variant: {
            success: 'border-success bg-success-light',
            process: 'border-process bg-process-light',
            danger: 'border-danger bg-danger-light',
        },
    },

    defaultVariants: {
        variant: 'success',
    }

})

export function Service({ variant, contractURL }: ServicesProps) {
    return (
        <Link to={contractURL} className={serviceVariants({ variant })}>
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-2 items-center justify-center">
                    <div className="w-8 h-w-8 overflow-hidden rounded-full">
                        <img 
                            src="http://github.com/PedroH2o.png"
                            alt="Pedro Yan"
                            className="w-full object-cover" 
                        />
                    </div>
                    <span className="font-bold text-base leading-snug text-slate-">
                        Pedro Yan
                    </span>
                </div>
                <span className={tagVariants({ variant })}>
                    {variant === 'success' || variant === undefined && 'Concluido'}
                    {variant === 'process' && 'Em andamento'}
                    {variant === 'danger' && 'Cancelado'}
                </span>
            </div>

            <h1 className="w-full text-lg font-extrabold text-slate-950 leading-snug">
                Lorem ipsum dolor sit
            </h1>
            
            <div className="flex gap-2 text-slate-700">
                <Clock size={18}/>
                <span className="text-sm">
                    28/Jun/2024
                </span>
            </div>
        </Link>
    )
}