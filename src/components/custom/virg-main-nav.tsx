
import linxCodes from "@/assets/linxcodes.png"
import VirgNav from "./nav/virg-nav";


export default function MainNavigation (){
    return(
        <nav className="w-full flex justify-around items-center px-5 py-2 sticky top-0 text-white shadow-md z-50 bg-background/80 backdrop-blur border-b">

            <img src={linxCodes} className="h-15 w-15"/>

            <div className="flex justify-start gap-5">
               <VirgNav/>
            </div>
        </nav>
    )
}