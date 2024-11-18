interface UserBoxProps {
    name: string
    occupation: string
    imageULR: string
}

export function UserBox({ name, imageULR, occupation }: UserBoxProps) {
    return (
        <div className="w-full flex flex-col gap-4 bg-slate-50 rounded-lg p-4 shadow">
            <div className="flex gap-3 items-center">
                <img 
                    src={imageULR}
                    alt="" 
                    className="w-14 h-w-14"
                />
                <div className="flex flex-col gap-1">
                    <span className="text-base text-slate-900 font-bold">{name}</span>
                    <span className="text-sm text-slate-900 font-semibold">{occupation}</span>
                </div>
            </div>
        </div>
    )
}