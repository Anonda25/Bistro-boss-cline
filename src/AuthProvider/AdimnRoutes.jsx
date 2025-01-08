import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseIsAdmin from "../Hooks/UseIsAdmin";


const AdimnRoutes = ({children}) => {
    const { user, loading }=UseAuth()
    const location = useLocation()
    const [isAdmin,isAdminLoading]=UseIsAdmin()
    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
    
};

export default AdimnRoutes;