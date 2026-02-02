import HomePage from './pages/HomePage'
import { Navigate, Route, Routes } from 'react-router'
import { useUser } from '@clerk/clerk-react'
import { Toaster } from 'react-hot-toast'

function App() {

  const {isSignedIn} = useUser()

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problems" element={isSignedIn? <ProblemsPage />: <Navigate to={"/"} />} />
      </Routes>
      <Toaster toastOptions={{ duration:3000 }}/> 
    </>
  )
}

export default App
