import { NavLink } from "react-router"

export default function VirgMiniNavItem(
    {
        children,
        linkTo,
        icon
    
    }:{
        children: React.ReactNode,
        linkTo: string,
        icon: React.ReactNode
    }
){
    return(
        <>
        <NavLink to={linkTo} className={({isActive}) =>
            `
            flex gap-10 items-center text-white border px-4 py-2 rounded-md hover:bg-fuchsia-500/60 
            ${
                isActive ? 'bg-fuchsia-600/70' : 'bg-fuchsia-400/30'
            }
            `
        }>
            <div className="">
                {icon}
            </div>
            <div className="">
                <span>
                    {children}
                </span>
            </div>
        </NavLink>
        </>
    )
}