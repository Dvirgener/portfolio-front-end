import VirgMiniNavItem from "./virg-mini-nav-item";
import { useContext } from "react";
import { NavigationContext } from "@/store/context/navigation-context";

export default function VirgMiniNav (){

    const navCtx = useContext(NavigationContext);

    return(
        <div className="p-2 space-y-3">
            {
                navCtx.map((nav) => (<VirgMiniNavItem key={nav.label} icon={nav.con} linkTo={nav.link}>{nav.label}</VirgMiniNavItem>))
            }
            

        </div>
    )
}