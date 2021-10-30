import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,FacebookAuthProvider      } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializing from "../Firabase/firebase.init";


firebaseInitializing()

const  useFirebase =  () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const [isLoading,setIsLoading] = useState(true)
    const [user,setUser] = useState({})
    const [error, setError] = useState('')

    //google sign in 
    const googleSignIn = () => {
       return signInWithPopup(auth,googleProvider)        
    }
    //facebook sign in
    const facebookSignIn = () => {
        return signInWithPopup(auth, facebookProvider)
        
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {            
            if (user) {
                setUser(user)
            }
             else {
                setUser({})
            }
            setIsLoading(false)
        })
        
    },[])

    //log out
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error.message)
          })
          .finally(() => {
            setIsLoading(false)
          })
    }

    return {googleSignIn,user,error, isLoading,logOut,setIsLoading,setError,setUser,facebookSignIn}
}

export default useFirebase