import VirgNavItem from "./virg-nav-item"
import { useContext } from "react";
import { NavigationContext } from "@/store/context/navigation-context";

export default function VirgNav(){

    const navCtx = useContext(NavigationContext);
    return(
        <div className="flex gap-4">
            {
                navCtx.map((nav) => (<VirgNavItem key={nav.label} icon={nav.con} linkTo={nav.link}>{nav.label}</VirgNavItem>))
            }
        </div>
    )
}