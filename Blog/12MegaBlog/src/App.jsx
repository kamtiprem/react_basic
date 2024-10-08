import { useState, useEffect } from 'react'
import './App.css'
import  { useDispatch } from 'react-redux'
import authServise from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authServise.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ?(
    <div className="min-h-screen flex flex-wrap content-between bg-gray-100">
      <div className='w-full block'>
          <Header />
          <main>
          ToDo:<Outlet />
          </main>  
          <Footer />        
      </div>
      
    </div>
  ):null
}

export default App
