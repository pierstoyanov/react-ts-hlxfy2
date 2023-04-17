import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const Logout = (): null => {
    /** Renderless component to handle logout logic */
    
    const { currUser, logout, getCurrUser } = useAuth(); 
    const navigate = useNavigate();
    
    useEffect(() => {
    logout()
        .then(() => {
            console.log(getCurrUser())
            navigate('/') 
        })
        .catch((err) => {
            const [errCode, errMsg] = [err.code, err.message];
            console.log(errCode, "\n", errMsg)
            // todo snackbar msg
        })
    }, []);

    return null;
} 

export default Logout;