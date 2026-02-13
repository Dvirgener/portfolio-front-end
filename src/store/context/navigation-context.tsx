
import { Home } from "lucide-react";
import React, { createContext } from "react";

type NavItem = {
    con: React.ReactNode,
    link: string,
    label: string
}[];

export const NavigationContext = createContext<NavItem>([{
    con : <Home/>,
    link: '/',
    label: 'home'

}]);
