import { Home, UserRound } from "lucide-react"
import VirgNavItem from "./virg-nav-item"

export default function VirgNav(){
    return(
        <div className="flex gap-4">
            <VirgNavItem linkTo="/" icon={<Home size={15}/>}>Home</VirgNavItem>
            <VirgNavItem linkTo="/home" icon={<UserRound size={15} />}>Profile</VirgNavItem>
        </div>
    )
}