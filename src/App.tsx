
import './App.css'
import MainNavigation from './components/custom/virg-main-nav'
import { Outlet } from 'react-router'
import Footer from './pages/sections/Footer'



function App() {


  return (

    <div className='w-full relative h-full'>
                                  
      <MainNavigation/>
      <div>
        <Outlet/>
      </div>

      <Footer/>
    </div>
  )
}

export default App
