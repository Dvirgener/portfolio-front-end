
import './App.css'
import MainNavigation from './components/custom/virg-main-nav'
import { Outlet, useActionData, useNavigation } from 'react-router'
import Footer from './pages/sections/Footer'
import FloatingShapes from './components/custom/virg-floatingShapes'
import ContactForm from './components/custom/contact/ContactForm'
import AdditionalContact from './pages/sections/AdditionalContact'
import SectionTitle from './components/custom/virg-section-title'



function App() {

  const data = useActionData();



  return (

    <div className='w-full relative h-full'>
                                  
      <MainNavigation/>

      <div>
        <Outlet/>
      </div>

       <SectionTitle titleNot="Get in" titleBold="Touch" description="Have a project in mind or just want to say hi? I'd love to hear from you."/>

      <div className='mx-50 text-white p-10 border rounded-md bg-white/10 mb-10'>
        <ContactForm/> 
      </div>

      <div>
        <AdditionalContact/>
      </div>

      <Footer/>
      <FloatingShapes count={35} />
    </div>
  )
}

export default App
