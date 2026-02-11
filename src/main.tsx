import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from "@/components/theme-provider"
import HomePage from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
    {
    path: "/home",
    element: <HomePage/>,
  },
]);


createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ThemeProvider>
)
