import PortfolioCard from "@/components/custom/portfolio/portfolio-card"
import SectionTitle from "@/components/custom/virg-section-title"

export default function Portfolio(){
    return(
        <div className="h-full px-10 md:px-20">
            <SectionTitle titleNot="My Creative" titleBold="Portfolio" description="A curated selection of my best work, showcasing my skills in design and development."/>

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