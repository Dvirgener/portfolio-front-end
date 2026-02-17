// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// These are the Redux Store Imports
import {Provider} from 'react-redux'
import store from './store/redux/reduxStore.tsx'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from "@/components/theme-provider"
import HomePage from './pages/Home.tsx'
import App from './App.tsx'
import { NavigationContext } from './store/context/navigation-context.tsx'
import { Home, UserRound } from 'lucide-react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index:true,
        element: <HomePage/>,       
      },
    ]
  },

]);

const nav = [
  {
    con: <Home size={20}/>,
    link: "/",
    label: "Home"
  },
  {
  con: <UserRound size={20}/>,
  link: "/home",
  label: "Profile"
  }
]



createRoot(document.getElementById('root')!).render(

  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <NavigationContext.Provider value={nav}>
          <RouterProvider router={router} />
        </NavigationContext.Provider>
      </Provider>
  </ThemeProvider>
)
