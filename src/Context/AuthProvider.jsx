import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const registerUser =(email, password)=>{
      setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, imgPath)=>{
      return updateProfile(auth.currentUser, {displayName:name, photoURL:imgPath})
    }

    const loginUser =(email, password)=>{
      setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
          setUser(currentUser)
          setLoading(false)
     })
     return ()=>{
      unSubscribe()
     }
    },[])

    const userLogout =()=>{
      return signOut(auth)
    }

    console.log(user)

    const authInfo = {
      user, 
      loading,
      registerUser,
      updateUser,
      loginUser,
      userLogout
    }

    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.object
}

export default AuthProvider;