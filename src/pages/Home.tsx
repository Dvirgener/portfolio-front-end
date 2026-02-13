import AboutMe from './sections/AboutMe'
import HeroSection from './sections/Hero'
import Portfolio from './sections/Porfolio'

export default function HomePage(){
    return(
        <>
        <section className='h-full mb-10' id="hero-section">
            <HeroSection/>
        </section>

        <section className='h-full mb-10' id="about-section">
            <AboutMe/>
        </section>

        <section className='h-full mb-10' id="portfolio-section">
            <Portfolio/>
        </section>
        </>

    )
}