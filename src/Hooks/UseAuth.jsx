import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const UseAuth = () => {
    const Auth = useContext(AuthContext);
    return Auth;
};

export default UseAuth;