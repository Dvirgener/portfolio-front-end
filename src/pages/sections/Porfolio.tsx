import PortfolioCard from "@/components/custom/portfolio/portfolio-card"

export default function Portfolio(){
    return(
        <div className="h-full px-10 md:px-20">
            <div className="mb-15">
                <p className="special-elite-regular text-3xl md:text-6xl grenze-regular text-center mb-3"><span className="text-white">My Creative</span> Portfolio</p>
                <p className="text-center text-white roboto-virg">A curated selection of my best work, showcasing my skills in design and development.</p>
            </div>
            <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-max">
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </div>
            </div>

            
        </div>
    )
}