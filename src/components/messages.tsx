import { tv, VariantProps } from "tailwind-variants";

interface MessagesProps extends VariantProps<typeof messageVariants> {
    message: string;
}

const messageVariants = tv({
    base: 'w-4/6 px-2 py-4 text-base text-slate-900 font-normal  rounded',

    variants: {
        variant: {
            to: 'bg-slate-300',
            me: 'bg-secondary-300'
        }
    },
    defaultVariants: {
        variant: 'to'
    }
})
export function Messages({ message, variant }: MessagesProps){
    return (
        <div className={`w-full flex ${variant === 'to' ? 'justify-start' : 'justify-end'}`}>
            <p className={messageVariants({variant})}>
               {message}
            </p>
        </div>
    )
}