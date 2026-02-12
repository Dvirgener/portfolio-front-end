import { NavLink } from "react-router"


export default function VirgNavItem(
{   
    children,
    linkTo,
    icon
}:{
    children: React.ReactNode
    linkTo: string,
    icon: React.ReactNode
}
){
    return (
        <div >
            <NavLink to={linkTo}  className={({ isActive, isPending }) =>
                `flex gap-2 px-5 rounded-md py-2 text-white text-xs hover:bg-fuchsia-200/50 ${
                isPending
                    ? "opacity-50"
                    : isActive
                    ? "bg-fuchsia-400/40"
                    : ""
                }`
            }>

               {icon}

               <span>
                    {children}
               </span>
            </NavLink>
        </div>
    )
}