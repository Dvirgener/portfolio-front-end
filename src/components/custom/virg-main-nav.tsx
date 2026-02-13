
import linxCodes from "@/assets/linxcodes.png"
import VirgNav from "./nav/virg-nav";
import { Menu } from "lucide-react";
import { useState } from "react";
import VirgMiniNav from "./nav/virg-mini-nav";


export default function MainNavigation (){

    const [menuVisible, setMenuVisible] = useState(false);

    function handleBurgerMenu(){
        setMenuVisible(!menuVisible);
    }

    return(
        <div className="sticky top-0 backdrop-blur border-b z-9999">
            <nav className="w-full flex justify-between md:justify-around items-center px-5 py-2  text-white shadow-md z-50 bg-background/80 relative">

                <img src={linxCodes} className="h-15 w-15"/>

                <div className=" justify-start gap-5 hidden md:flex">
                <VirgNav/>
                </div>
                <div className="block md:hidden text-white hover:bg-fuchsia-400/50 p-2 hover:cursor-pointer rounded-sm transition-all duration-200">
                    <Menu className="" onClick={handleBurgerMenu} />
                </div>



            </nav>

            {
                menuVisible &&

            <div className="h-90 w-full absolute top-20 md:hidden px-5 flex justify-center pt-5">
                <div className="h-max w-full rounded px-10 py-5 bg-fuchsia-300/20 backdrop-blur text-white">
                    <VirgMiniNav/>
                </div>
            </div>

            }



        </div>
        

    )
}