import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,FacebookAuthProvider      } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitializing from "../Firabase/firebase.init";


firebaseInitializing()

const  useFirebase =  () => {
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const [isLoading,setIsLoading] = useState(true)
    const [isAdmin,setIsAdmin] = useState(false)
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
        
    },[auth])

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

    //saving user data
    const saveUser = (email, name, method) => {
        const user =  {email, name}
        fetch('https://warm-plateau-98820.herokuapp.com/users', {
            method : method,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
    }

    //admin checking
    useEffect( () => {
        fetch(`https://warm-plateau-98820.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data =>  setIsAdmin(data.admin))
    },[user.email])

    return {googleSignIn,user,error, isLoading,logOut,setIsLoading,setError,setUser,facebookSignIn, saveUser,isAdmin}
}

export default useFirebase