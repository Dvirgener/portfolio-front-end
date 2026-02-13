export default function VirgPills({
    val

}:{
    val: string
}){
    return(
        <span className="bg-white/10 rounded text-sm text-white roboto-virg px-3 py-1 border">
            {val}
        </span>
    )
}