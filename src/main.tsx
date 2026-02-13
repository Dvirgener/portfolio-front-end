import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

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
        path: "",
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
    <StrictMode>
      <NavigationContext.Provider value={nav}>
        <RouterProvider router={router} />
      </NavigationContext.Provider>

    </StrictMode>
  </ThemeProvider>
)
