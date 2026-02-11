import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import MainNavigation from './components/custom/virg-main-nav'



function App() {
  const [count, setCount] = useState(0)


  return (

    <div className='w-full md:mx-20 mx-10 mt-10'>

      <MainNavigation/>

      {/* <div>
        <Button onClick={() => setCount((count) => count + 5)}>This is a Test Button</Button>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs ">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
