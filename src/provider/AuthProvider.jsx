import PropTypes from "prop-types";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

// Google provider 
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // Create new user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password).finally(() => setLoading(false))
    }

    // Existent user login
    const userLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password).finally(() => setLoading(false))
    }

    // Get the currently signed-in user, Monitor auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            }
            else {
                setUser(null)
            }
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    // Log in with google
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // Sign Out user
    const userSignOut = () => {
        return signOut(auth)
    }


    const authInfo = { createUser, userLogIn, user, userSignOut, loading, googleLogIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}