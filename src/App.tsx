
import './App.css'
import MainNavigation from './components/custom/virg-main-nav'
import { Outlet } from 'react-router'



function App() {


  return (

    <div className='w-full relative h-full'>
                                  
      <MainNavigation/>
      <div>
        <Outlet/>
      </div>


    </div>
  )
}

export default App
