import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()

    const googleProvider = new GoogleAuthProvider();

    const signinUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })

        }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            })
    },[])
    
    
        return {
            user,
            error,
            logout,
            signinUsingGoogle
        }
}

export default useFirebase;