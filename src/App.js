import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import AuthProvider from './contexts/authContext'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<>home</>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
