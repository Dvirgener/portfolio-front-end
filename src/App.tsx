
import './App.css'
import MainNavigation from './components/custom/virg-main-nav'
import { Outlet } from 'react-router'
import Footer from './pages/sections/Footer'
import FloatingShapes from './components/custom/virg-floatingShapes'

function App() {

  return (

    <div className='w-full relative h-full'>
                                  
      <MainNavigation/>

      <div>
        <Outlet/>
      </div>


      <Footer/>
      <FloatingShapes count={35} />
    </div>
  )
}

export default App
