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

        <section className='h-full mb-25 md:mx-45' id="about-section">
            <AboutMe/>
        </section>

        <section className='h-full mb-25' id="portfolio-section">
            <Portfolio/>
        </section>

        <section className=' mb-15' id="testimonials-section">
            <Testimonials/>
        </section>

        <section className='' id="contact-section">
            <Contact/>
            <AdditionalContact/>
        </section>
        </>

    )
}