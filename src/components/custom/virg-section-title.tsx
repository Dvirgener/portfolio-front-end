export default function SectionTitle({
    titleBold,
    titleNot,
    description
}:{
    titleBold: string,
    titleNot: string,
    description: string
}){
    return(
            <div className="mb-15">
                <p className="special-elite-regular text-3xl md:text-6xl grenze-regular text-center mb-3"><span className="text-white">{titleNot}</span> {titleBold}</p>
                <p className="text-center text-white roboto-virg text-sm md:text-md"> {description}</p>
            </div>
    )
}