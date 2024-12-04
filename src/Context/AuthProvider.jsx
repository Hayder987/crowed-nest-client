import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
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

    const authInfo = {
      user, 
      loading,
      registerUser,
      updateUser
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