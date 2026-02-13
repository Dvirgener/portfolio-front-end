export default function Skill({
    icon,
    title,
    children
}:{
    icon : React.ReactNode,
    title: string,
    children: React.ReactNode
}){
    return(
        <div className="bg-white/10 px-5 py-4 w-full rounded-md">
            <div className="flex gap-3 items-center text-red-500 mb-3">
                {icon}
                <span className="font-bold text-md text-white">{title}</span>
            </div>
            <div className="text-xs">
                {children}
            </div>
        </div>
    )
}