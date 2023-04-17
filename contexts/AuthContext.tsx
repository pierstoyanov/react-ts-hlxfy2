import * as React from 'react';
import firebase from 'firebase/app';
import { Dispatch, createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { User, UserCredential, createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, signOut } from "firebase/auth";


// TODO
export interface IAuthContext {
    currUser: User | null,
    // setCurrUser: Dispatch<any>,
    // setLoading: any,
    login: any,
    logout: any,
    signUp: any,
    getUser: any,
    getCurrUser: any,
    remUser: any
};

export const AuthContext = createContext({} as IAuthContext);

export const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthContextProvider({children}) {
    const [currUser, setCurrUser] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const unusubscribe = auth.onAuthStateChanged((user) => {
            setCurrUser(user);
            // console.log("bar " + currUser);
            // console.log(auth.currentUser)
            //console.log(currUser)
            setLoading(false);
       });

       return () => {unusubscribe()};
    }, []);

    function login (email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signUp = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }

    const remUser = () => {
        if (auth.currentUser !== null)
        {
            // todo ask reauth
            return deleteUser(auth.currentUser);
        }
        else
        {
            return 
        }
    }

    const getUser = () => {
        return auth.currentUser;
    }
    
    const getCurrUser = () => {
        return currUser;
    }


    //const value = {currentUser, setCurrentUser, login, logout, signUp, getUser}
    // , setCurrUser, setLoading,
    return (
    <AuthContext.Provider value={{  currUser, login, signUp, logout, getUser, getCurrUser, remUser }}>
        {!loading && children}
    </AuthContext.Provider>
    );
}
