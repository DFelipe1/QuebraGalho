import { useNavigate } from "react-router-dom";
import { Button } from "./button";

interface UserAvatarProps{
    imgAvatar: string;
    name: string;
    userName: string;
}

export function UserAvatar({ imgAvatar, name, userName}: UserAvatarProps) {

    const navigate = useNavigate()

    function handleNavigateToUserProfile(){
        navigate(`/profile/${userName}/`)
    }
    return (
        <Button variant="ghost" onClick={handleNavigateToUserProfile} className="flex gap-2 items-center justify-center">
            <span className="max-sm:sr-only not-sr-only font-bold text-base leading-snug text-slate-100">
                {name}
            </span>
            <div className="w-12 h-w-12 overflow-hidden rounded-full">
                <img 
                    src={imgAvatar}
                    alt={name} 
                    className="w-full object-cover" 
                />
            </div>
        </Button>
    )
}