interface UserAvatarProps {
    imgAvatar: string;
    name: string;
}

export function UserAvatar({ imgAvatar, name }: UserAvatarProps) {
    return (
        <div className="flex gap-2 items-center justify-center">
            <span className="font-bold text-base leading-snug text-slate-100">
                {name}
            </span>
            <div className="w-14 h-14 overflow-hidden rounded-full">
                <img 
                    src={imgAvatar}
                    alt={name} 
                    className="w-full object-cover" 
                />
            </div>
        </div>
    )
}