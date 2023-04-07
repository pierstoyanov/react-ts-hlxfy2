import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";


const Logout = (): null => {
    /** Renderless component to handle logout logic */
    
    const { currentUser, setCurrentUser, logout } = useAuth(); 
    
    useEffect(() => {
    logout()
        .then(() => {
            setCurrentUser(null);
        })
        .catch((err) => {
            const errCode = err.code;
            const errMsg = err.message;
            console.log(errCode, "\n", errMsg)
            // todo snackbar msg
            })
    }, []);

    return null;
} 

export default Logout;