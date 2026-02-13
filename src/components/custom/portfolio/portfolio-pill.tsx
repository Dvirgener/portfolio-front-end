export default function PortfolioPill({
    children
}:{children:React.ReactNode}){
    return(
        <span className=" text-[10px] px-2 rounded-lg bg-fuchsia-900 text-white/90">
            {children}
        </span>
    )
}