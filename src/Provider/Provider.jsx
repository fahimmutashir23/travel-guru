import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const AuthContext = createContext(null);

const Provider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const signUpUser = (email, password) => {
        setLoading()
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading()
        return signOut(auth)
    }

    const signInUser = (email, password) => {
        setLoading()
        return signInWithEmailAndPassword(auth, email, password)
    }

    const verificationMail = () =>{
        setLoading()
        return sendEmailVerification(auth.currentUser)
    } 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return unsubscribe
    },[])


    const authInfo = {user, signUpUser, signInUser, logOut, verificationMail, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node
};


export default Provider;