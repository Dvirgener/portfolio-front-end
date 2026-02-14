import AboutMe from './sections/AboutMe'
import AdditionalContact from './sections/AdditionalContact'
import Contact from './sections/Contact'
import HeroSection from './sections/Hero'
import Portfolio from './sections/Porfolio'
import Testimonials from './sections/Testimonials'

export default function HomePage(){
    return(
        <>
        <section className='h-full mb-10' id="hero-section">
            <HeroSection/>
        </section>

        <section className='h-full mb-25' id="about-section">
            <AboutMe/>
        </section>

        <section className='h-full mb-25' id="portfolio-section">
            <Portfolio/>
        </section>

        <section className=' mb-15' id="testimonials-section">
            <Testimonials/>
        </section>

        <section className=' mb-10' id="contact-section">
            <Contact/>
        </section>

        <section className='' id="contact-section">
            <AdditionalContact/>
        </section>
        </>

    )
}