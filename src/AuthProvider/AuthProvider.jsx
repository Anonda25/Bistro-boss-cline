import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import auth from '../Firebage/Firebage.confige';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';




export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const AxiosPublic =UseAxiosPublic()
    //user creact
    const creactUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //user login 
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const Logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    const GoogleLogin =()=>{
        setLoading(true)
       return signInWithPopup(auth, provider);
    }

    const updateProfiles = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    const authInfo = {
        name: ' ananda',
        user,
        loading,
        Logout,
        creactUser,
        userLogin, 
        updateProfiles,
        GoogleLogin
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            // console.log(' current User', currentUser);
            if(currentUser){
                const userInfo ={
                    email : currentUser.email
                }
                AxiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }else{
                // TODO: something 
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [AxiosPublic])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;