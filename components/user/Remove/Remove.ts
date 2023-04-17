import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const Logout = (): null => {
    /** Renderless component to handle removing user logic */
    
    const { currUser, remUser } = useAuth(); 
    const navigate = useNavigate();
    
    useEffect(() => {
    remUser()
        .then(() => {
            console.log(currUser)
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