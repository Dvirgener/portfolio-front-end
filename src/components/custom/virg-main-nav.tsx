
import { HomeIcon, Navigation } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link, NavLink } from "react-router";


export default function MainNavigation (){
    return(
        <nav className="w-full flex justify-between items-center  px-5 py-2 border rounded-lg shadow">
            <div className="flex justify-start gap-5">

                <NavigationMenu className="space-x-2">

                    <NavigationMenuLink className="hover:cursor-pointer font-bold text-xs py-3">
                        <NavLink to="/" >
                            <div className="flex gap-3 px-2">
                                <HomeIcon/> Home
                            </div>
                        </NavLink>
                    </NavigationMenuLink>

                    <NavigationMenuLink className="hover:cursor-pointer font-bold text-xs py-3">
                        <Link to="/home">
                            <div className="flex gap-3 px-2">
                                <HomeIcon/> Home Page
                            </div>
                        </Link>
                    </NavigationMenuLink>

                </NavigationMenu>
            </div>

            <ModeToggle/>

        </nav>
    )
}