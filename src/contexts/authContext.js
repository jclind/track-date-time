import React, { useState, useEffect, useContext } from 'react'
import {
  signOut,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { db } from '../client/firebase'

const AuthContext = React.createContext()
const auth = getAuth()

export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const signInWithGoogle = setError => {
    const provider = new GoogleAuthProvider()

    signInWithPopup(auth, provider)
      .then(result => {
        // navigate('/')
      })
      .catch(err => {
        // setError(err.code)
        console.log(err.code)
      })
  }

  // Check for auth status on page load
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userInstance => {
      console.log(userInstance)

      if (userInstance) {
        console.log('logged in')
        setUser(userInstance)
      } else {
        console.log('logged out')
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  const value = {
    user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
