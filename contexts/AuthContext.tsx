import * as React from 'react';
import firebase from 'firebase/app';
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { User, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


// TODO
export interface IAuthContext {
    currentUser: User | null,
    setCurrentUser: {},
    login: any,
    logout: () => {},
    signUp: any,
    getUser: any
};

export const AuthContext = createContext({} as IAuthContext);

export const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser] = useState< any | null>(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
       auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        console.log(`cUser in context ${currentUser}`);
        setLoading(false);
       }); 
    }, []);

    function login (email: string, password: string) {
        return signInWithEmailAndPassword(auth, email,password);
    }

    const signUp = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }

    const getUser = () => {
        return auth.currentUser;
    }

    //const value = {currentUser, setCurrentUser, login, logout, signUp, getUser}

    return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, login, signUp, logout, getUser }}>
        {!loading && children}
    </AuthContext.Provider>
    );
}
